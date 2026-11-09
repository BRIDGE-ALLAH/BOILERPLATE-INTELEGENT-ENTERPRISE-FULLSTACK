 import { scryptSync, randomBytes, timingSafeEqual } from 'crypto';
 
 export class PasswordService {
   private readonly saltLength = 16;
   private readonly keyLength = 64;
   private readonly iterations = 100000;
 
   async hash(password: string): Promise<string> {
     const salt = randomBytes(this.saltLength).toString('hex');
     const hash = scryptSync(password, salt, this.keyLength, {
       N: this.iterations,
     }).toString('hex');
     
     return `${salt}:${hash}`;
   }
 
   async verify(password: string, storedHash: string): Promise<boolean> {
     try {
       const [salt, hash] = storedHash.split(':');
       if (!salt || !hash) return false;
       
       const derivedHash = scryptSync(password, salt, this.keyLength, {
         N: this.iterations,
       }).toString('hex');
       
       return timingSafeEqual(Buffer.from(hash), Buffer.from(derivedHash));
     } catch {
       return false;
     }
   }
 }
 
 export const passwordService = new PasswordService();
