export interface CompanyFiles {
  companies: Array<{
    name: string;
    files: Array<{
      id: string;
      title: string;
    }>;
  }>;
}
