/**
 * 
 * @param obj 
 * @param keys 
 * @returns A boolean value if an object has or not all of its atributes
 */
export function hasAllAtributes<T>(obj: unknown): obj is T {
  if (typeof obj !== "object" || obj === null) return false;

  // TypeScript knows obj is an object here
  const record = obj as Record<string, unknown>;

  // Check that all keys of T exist in the object
  return (Object.keys(record) as (keyof T)[])
    .length >= 0 && 
    (Object.keys(record) as (keyof T)[]).every(key => key in record);
}
