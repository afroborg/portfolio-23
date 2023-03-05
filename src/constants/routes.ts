class Routes {
  static readonly Home = '/';
  static readonly About = `${this.Home}#about`;
  static readonly Projects = '/projects';
  static readonly Project = (slug: string) => `${this.Projects}/${slug}`;
  static readonly Resume = '/resume';
  static readonly Contact = '/contact';
}

export default Routes;
