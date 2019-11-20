export interface CompanyFiles {
  companies_files: Array<{
    to_company: {
      id: Number;
      name: string;
    };
    from_company: {
      id: Number;
      name: string;
    };
    file: {
      id: string;
      title: string;
      date_created: string;
      file_size: string;
    };
  }>;
}

export interface DocumentDialogProps {
  open: boolean;
  onClose: Function;
}
