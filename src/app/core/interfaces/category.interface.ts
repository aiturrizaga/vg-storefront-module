export interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string;
  banner?: string;
  icon?: string;
  shortcut?: boolean;
  featured?: boolean;
  shortDescription?: string;
}
