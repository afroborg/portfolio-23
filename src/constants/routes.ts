import constants from '../constants';

class Routes {
  static readonly Home = '/';
  static readonly About = `${this.Home}#about`;
  static readonly Projects = '/projects';
  static readonly Blog = '/blog';
  static readonly Project = (slug: string) => `${this.Projects}/${slug}`;
  static readonly Resume = '/resume';
  static readonly Contact = `mailto:${constants.email}`;
}

export default Routes;
