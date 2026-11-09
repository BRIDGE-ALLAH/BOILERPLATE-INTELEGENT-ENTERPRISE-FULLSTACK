export interface AddonManifest {
  readonly name: string;
  readonly version: string;
  readonly dependencies: readonly string[];
  readonly models: readonly any[];
  readonly actions: readonly any[];
  readonly policies: readonly any[];
}

export interface AddonGraph {
  readonly addons: Map<string, AddonManifest>;
  readonly dependencyGraph: Map<string, Set<string>>;
}

export interface AddonEngine {
  register(addon: AddonManifest): void;
  resolve(): AddonManifest[];
  freeze(): void;
}

export class Engine implements AddonEngine {
  private addons: Map<string, AddonManifest> = new Map();
  private frozen = false;

  register(addon: AddonManifest): void {
    if (this.frozen) {
      throw new Error('Cannot register addons after registry is frozen');
    }
    this.addons.set(addon.name, addon);
  }

  resolve(): AddonManifest[] {
    const resolved: AddonManifest[] = [];
    const visited = new Set<string>();

    const visit = (name: string): void => {
      if (visited.has(name)) return;
      const addon = this.addons.get(name);
      if (!addon) throw new Error(`Addon ${name} not found`);
      visited.add(name);
      for (const dep of addon.dependencies) {
        visit(dep);
      }
      resolved.push(addon);
    };

    for (const [name] of this.addons) {
      visit(name);
    }

    return resolved;
  }

  freeze(): void {
    this.frozen = true;
  }
}