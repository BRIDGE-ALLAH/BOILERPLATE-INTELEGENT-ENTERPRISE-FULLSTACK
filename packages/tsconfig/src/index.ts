 // TypeScript configuration package
 // This package provides base TypeScript configurations
 // for both Node.js and Next.js environments
 
 export const baseConfig = './base.json';
 export const nodeConfig = './node.json';
 export const nextConfig = './next.json';
 
 export const configs = {
   base: baseConfig,
   node: nodeConfig,
   next: nextConfig,
 } as const;
 
 export type ConfigName = keyof typeof configs;
