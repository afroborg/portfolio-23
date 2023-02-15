export type Collection = {
  data: {
    title: string;
    company: string;
    start: string;
    end?: string | undefined;
  };
  render: () => Promise<{ Content: any }>;
};
