// OpenTelemetry + Sentry observability baseline
import * as Sentry from '@sentry/node';
import { NodeSDK } from '@opentelemetry/sdk-node';
import { getNodeAutoInstrumentations } from '@opentelemetry/auto-instrumentations-node';
import { OTLPTraceExporter } from '@opentelemetry/exporter-trace-otlp-http';
import { env } from '@repo/config';

let otelSDK: NodeSDK | null = null;

export function initObservability() {
  // Sentry initialization
  if (env.SENTRY_DSN) {
    Sentry.init({
      dsn: env.SENTRY_DSN,
      environment: env.SENTRY_ENVIRONMENT,
      release: 'moonwitness-api@1.0.0',
      tracesSampleRate: env.NODE_ENV === 'production' ? 0.1 : 1.0,
      integrations: [
        new Sentry.Integrations.Http({ tracing: true }),
      ],
    });
  }

  // OpenTelemetry tracing
  const traceExporter = new OTLPTraceExporter({
    url: process.env.OTEL_EXPORTER_OTLP_ENDPOINT || 'http://localhost:4318/v1/traces',
  });

  otelSDK = new NodeSDK({
    traceExporter,
    instrumentations: [getNodeAutoInstrumentations()],
    serviceName: 'moonwitness-api',
    version: '1.0.0',
  });

  otelSDK.start().catch((err) => {
    console.error('Failed to initialize OpenTelemetry:', err);
  });

  return {
    sentry: Sentry,
    otel: otelSDK,
  };
}

export function shutdownObservability() {
  if (otelSDK) {
    return otelSDK.shutdown();
  }
  return Promise.resolve();
}

export { Sentry };
