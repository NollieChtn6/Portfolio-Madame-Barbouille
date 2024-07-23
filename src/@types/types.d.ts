export interface Work {
  id: number;
  title: string;
  slug: string;
  year: number;
  format: string;
  paperType: string;
  artSupplies: string[];
  description: string;
  tags: string[];
  imageUrl: string;
  altDescription: string;
}
