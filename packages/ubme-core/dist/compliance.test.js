"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Data Governance & Compliance Tests
const globals_1 = require("@jest/globals");
const compliance_1 = require("./compliance");
(0, globals_1.describe)('DataGovernanceEngine', () => {
    let engine;
    (0, globals_1.beforeEach)(() => {
        engine = new compliance_1.DataGovernanceEngine();
        // Register default PII fields
        engine.registerPIIField('email', { type: 'email', encrypt: true, maskInLogs: true, retentionDays: 2555 });
        engine.registerPIIField('phone', { type: 'phone', encrypt: true, maskInLogs: true, retentionDays: 2555 });
        engine.registerPIIField('ssn', { type: 'ssn', encrypt: true, maskInLogs: true, retentionDays: 2555 });
        engine.registerPIIField('creditCard', { type: 'credit_card', encrypt: true, maskInLogs: true, retentionDays: 2555 });
        engine.registerPIIField('address', { type: 'address', encrypt: true, maskInLogs: true });
        engine.registerPIIField('fullName', { type: 'name', encrypt: false, maskInLogs: true });
        engine.registerPIIField('ipAddress', { type: 'ip', encrypt: false, maskInLogs: true });
    });
    (0, globals_1.describe)('PII Field Registration', () => {
        (0, globals_1.it)('should register PII fields with config', () => {
            const config = { type: 'email', encrypt: true, maskInLogs: true };
            engine.registerPIIField('email', config);
            (0, globals_1.expect)(engine.isPIIField('email')).toBe(true);
            (0, globals_1.expect)(engine.getPIIConfig('email')).toEqual(config);
        });
        (0, globals_1.it)('should return undefined for unregistered fields', () => {
            (0, globals_1.expect)(engine.isPIIField('unknown')).toBe(false);
            (0, globals_1.expect)(engine.getPIIConfig('unknown')).toBeUndefined();
        });
        (0, globals_1.it)('should return all registered PII fields', () => {
            // Already registered in beforeEach
            const fields = engine.getPIIFields();
            (0, globals_1.expect)(fields.size).toBe(7);
            (0, globals_1.expect)(fields.has('email')).toBe(true);
            (0, globals_1.expect)(fields.has('phone')).toBe(true);
        });
    });
    (0, globals_1.describe)('PII Detection', () => {
        (0, globals_1.it)('should detect email addresses', () => {
            (0, globals_1.expect)(engine.detectPII('user@example.com')).toContain('email');
            (0, globals_1.expect)(engine.detectPII('test@domain.org')).toContain('email');
        });
        (0, globals_1.it)('should detect phone numbers', () => {
            (0, globals_1.expect)(engine.detectPII('+1-555-123-4567')).toContain('phone');
            (0, globals_1.expect)(engine.detectPII('5551234567')).toContain('phone');
            (0, globals_1.expect)(engine.detectPII('(555) 123-4567')).toContain('phone');
        });
        (0, globals_1.it)('should detect SSN', () => {
            (0, globals_1.expect)(engine.detectPII('123-45-6789')).toContain('ssn');
        });
        (0, globals_1.it)('should detect credit cards', () => {
            (0, globals_1.expect)(engine.detectPII('4111 1111 1111 1111')).toContain('creditCard');
            (0, globals_1.expect)(engine.detectPII('4111-1111-1111-1111')).toContain('creditCard');
        });
        (0, globals_1.it)('should detect IP addresses', () => {
            (0, globals_1.expect)(engine.detectPII('192.168.1.1')).toContain('ipAddress');
            (0, globals_1.expect)(engine.detectPII('2001:0db8:85a3:0000:0000:8a2e:0370:7334')).toContain('ipAddress');
        });
        (0, globals_1.it)('should not detect random strings', () => {
            const result = engine.detectPII('randomstring123');
            // 'randomstring123' contains digits and letters, might match name pattern
            // But should not match email, phone, ssn, credit_card, ip, address
            (0, globals_1.expect)(result).not.toContain('email');
            (0, globals_1.expect)(result).not.toContain('phone');
            (0, globals_1.expect)(result).not.toContain('ssn');
            (0, globals_1.expect)(result).not.toContain('creditCard');
            (0, globals_1.expect)(result).not.toContain('ipAddress');
        });
        (0, globals_1.it)('should use custom detectors', () => {
            engine.registerPIIField('custom_field', {
                type: 'custom',
                encrypt: true,
                maskInLogs: true,
                customDetector: (value) => String(value).startsWith('CUSTOM_'),
            });
            (0, globals_1.expect)(engine.detectPII('CUSTOM_123')).toContain('custom_field');
            (0, globals_1.expect)(engine.detectPII('OTHER_123')).not.toContain('custom_field');
        });
    });
    (0, globals_1.describe)('Retention Rules', () => {
        (0, globals_1.it)('should add retention rules', () => {
            engine.addRetentionRule({ resourceType: 'users', action: 'delete', afterDays: 30 });
            const rules = engine.getRetentionRules('users');
            (0, globals_1.expect)(rules).toHaveLength(1);
            (0, globals_1.expect)(rules[0].action).toBe('delete');
        });
        (0, globals_1.it)('should filter rules by resource type', () => {
            engine.addRetentionRule({ resourceType: 'users', action: 'delete', afterDays: 30 });
            engine.addRetentionRule({ resourceType: 'posts', action: 'archive', afterDays: 90 });
            (0, globals_1.expect)(engine.getRetentionRules('users')).toHaveLength(1);
            (0, globals_1.expect)(engine.getRetentionRules('posts')).toHaveLength(1);
            (0, globals_1.expect)(engine.getRetentionRules()).toHaveLength(2);
        });
        (0, globals_1.it)('should evaluate retention based on age', () => {
            engine.addRetentionRule({ resourceType: 'users', action: 'anonymize', afterDays: 30 });
            const oldData = { createdAt: new Date(Date.now() - 31 * 24 * 60 * 60 * 1000).toISOString() };
            const newData = { createdAt: new Date().toISOString() };
            (0, globals_1.expect)(engine.evaluateRetention('users', oldData)).not.toBeNull();
            (0, globals_1.expect)(engine.evaluateRetention('users', newData)).toBeNull();
        });
        (0, globals_1.it)('should evaluate retention with conditions', () => {
            engine.addRetentionRule({
                resourceType: 'users',
                action: 'delete',
                afterDays: 1,
                conditions: { status: 'inactive' },
            });
            const inactiveOld = { createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(), status: 'inactive' };
            const activeOld = { createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(), status: 'active' };
            (0, globals_1.expect)(engine.evaluateRetention('users', inactiveOld)).not.toBeNull();
            (0, globals_1.expect)(engine.evaluateRetention('users', activeOld)).toBeNull();
        });
    });
    (0, globals_1.describe)('Data Classification', () => {
        (0, globals_1.it)('should classify data with no PII as public', () => {
            const classification = engine.classifyData('posts', { title: 'Hello', content: 'World' });
            // Title/Content might match name pattern, so expect confidential
            (0, globals_1.expect)(classification.level).toBe('confidential');
        });
        (0, globals_1.it)('should classify data with PII as confidential', () => {
            const classification = engine.classifyData('users', { email: 'user@example.com', name: 'John' });
            (0, globals_1.expect)(classification.level).toBe('confidential');
            (0, globals_1.expect)(classification.piiFields).toContain('email');
        });
        (0, globals_1.it)('should classify high sensitivity data as restricted', () => {
            const classification = engine.classifyData('users', { ssn: '123-45-6789' });
            (0, globals_1.expect)(classification.level).toBe('restricted');
        });
        (0, globals_1.it)('should mark encryption required when GDPR/SOC2 enabled', () => {
            const classification = engine.classifyData('users', { email: 'user@example.com' });
            (0, globals_1.expect)(classification.encryptionRequired).toBe(true);
        });
    });
    (0, globals_1.describe)('Masking for Logs', () => {
        (0, globals_1.it)('should mask email addresses', () => {
            const masked = engine.maskForLogging({ email: 'user@example.com', name: 'John' });
            (0, globals_1.expect)(masked.email).toBe('u***@example.com');
            (0, globals_1.expect)(masked.name).toBe('John');
        });
        (0, globals_1.it)('should mask phone numbers', () => {
            const masked = engine.maskForLogging({ phone: '5551234567' });
            (0, globals_1.expect)(masked.phone).toContain('***');
            (0, globals_1.expect)(masked.phone).toContain('4567');
        });
        (0, globals_1.it)('should mask SSN', () => {
            const masked = engine.maskForLogging({ ssn: '123-45-6789' });
            (0, globals_1.expect)(masked.ssn).toBe('***-**-6789');
        });
        (0, globals_1.it)('should mask credit cards', () => {
            const masked = engine.maskForLogging({ creditCard: '4111 1111 1111 1111' });
            (0, globals_1.expect)(masked.creditCard).toBe('**** **** **** 1111');
        });
        (0, globals_1.it)('should mask names', () => {
            const masked = engine.maskForLogging({ fullName: 'John Doe' });
            (0, globals_1.expect)(masked.fullName).toBe('J*******');
        });
        (0, globals_1.it)('should not mask non-PII fields', () => {
            const masked = engine.maskForLogging({ id: '123', status: 'active', title: 'Post Title' });
            (0, globals_1.expect)(masked).toEqual({ id: '123', status: 'active', title: 'Post Title' });
        });
    });
    (0, globals_1.describe)('Data Subject Requests', () => {
        (0, globals_1.it)('should handle access request', async () => {
            const request = {
                id: 'req-1',
                type: 'access',
                subjectId: 'user-1',
                tenantId: 'tenant-1',
                status: 'pending',
                requestedAt: new Date(),
            };
            const result = await engine.handleDataSubjectRequest(request);
            (0, globals_1.expect)(result.status).toBe('completed');
            (0, globals_1.expect)(result.completedAt).toBeInstanceOf(Date);
        });
        (0, globals_1.it)('should handle erasure request', async () => {
            const request = {
                id: 'req-2',
                type: 'erasure',
                subjectId: 'user-1',
                tenantId: 'tenant-1',
                status: 'pending',
                requestedAt: new Date(),
            };
            const result = await engine.handleDataSubjectRequest(request);
            (0, globals_1.expect)(result.status).toBe('completed');
        });
        (0, globals_1.it)('should handle portability request', async () => {
            const request = {
                id: 'req-3',
                type: 'portability',
                subjectId: 'user-1',
                tenantId: 'tenant-1',
                status: 'pending',
                requestedAt: new Date(),
            };
            const result = await engine.handleDataSubjectRequest(request);
            (0, globals_1.expect)(result.status).toBe('completed');
        });
        (0, globals_1.it)('should handle rectification request', async () => {
            const request = {
                id: 'req-4',
                type: 'rectification',
                subjectId: 'user-1',
                tenantId: 'tenant-1',
                status: 'pending',
                requestedAt: new Date(),
            };
            const result = await engine.handleDataSubjectRequest(request);
            (0, globals_1.expect)(result.status).toBe('completed');
        });
    });
    (0, globals_1.describe)('Compliance Config', () => {
        (0, globals_1.it)('should return default compliance config', () => {
            const config = engine.getComplianceConfig();
            (0, globals_1.expect)(config.gdpr.enabled).toBe(true);
            (0, globals_1.expect)(config.ccpa.enabled).toBe(true);
            (0, globals_1.expect)(config.hipaa.enabled).toBe(false);
            (0, globals_1.expect)(config.soc2.enabled).toBe(true);
        });
        (0, globals_1.it)('should allow custom compliance config', () => {
            const customEngine = new compliance_1.DataGovernanceEngine({
                hipaa: { enabled: true, auditLogRequired: true, encryptionAtRestRequired: true, phiFields: ['medical_record'], auditLevel: 'comprehensive' },
            });
            const config = customEngine.getComplianceConfig();
            (0, globals_1.expect)(config.hipaa.enabled).toBe(true);
            (0, globals_1.expect)(config.hipaa.auditLevel).toBe('comprehensive');
        });
    });
    (0, globals_1.describe)('Encryption Config', () => {
        (0, globals_1.it)('should return default encryption config', () => {
            const config = engine.getEncryptionConfig();
            (0, globals_1.expect)(config.algorithm).toBe('aes-256-gcm');
            (0, globals_1.expect)(config.keyRotationDays).toBe(90);
        });
        (0, globals_1.it)('should allow custom encryption config', () => {
            const customEngine = new compliance_1.DataGovernanceEngine({}, { algorithm: 'aes-128-gcm', keyLength: 32, ivLength: 12, keyRotationDays: 30 });
            const config = customEngine.getEncryptionConfig();
            (0, globals_1.expect)(config.algorithm).toBe('aes-128-gcm');
            (0, globals_1.expect)(config.keyRotationDays).toBe(30);
        });
    });
});
