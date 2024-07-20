export interface IBaseStyle{
    toString(type?:string, self?: Record<string, string>): string;
    value(self?: Record<string, string>): string
}