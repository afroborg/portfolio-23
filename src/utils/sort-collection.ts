type Collection = {
  data: {
    start: string;
    end?: string | undefined;
  };
};

export const sortCollection = <T extends Collection>(collection: T[]) => {
  return collection.sort((a, b) => {
    // if end is not set, its a current job and should be sorted to the top
    // if more than one job has no end date, sort by start date
    if (!a.data.end && !b.data.end) {
      return (
        new Date(b.data.start).getTime() - new Date(a.data.start).getTime()
      );
    }

    if (!a.data.end) {
      return -1;
    }

    if (!b.data.end) {
      return 1;
    }

    // if both jobs have an end date, sort by end date
    return new Date(b.data.end).getTime() - new Date(a.data.end).getTime();
  });
};
