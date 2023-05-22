export interface IPaginatedTableSlot<T = any> {
  items: T[]
}

export interface IPaginatedTableHeader<T = any> {
  name: string | keyof T;
  label: string;
}

export interface IPaginatedTableItemSlot<T = any> {
  item: T
}
