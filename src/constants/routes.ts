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

export class Static {
  static readonly Favicon = '/favicon.png';
  static readonly Me = '/images/me.png';
  static readonly SansFont = '/fonts/hubot-sans.woff2';
  static readonly ProjectImage = (slug: string) => `/images/projects/${slug}`;
  static readonly ClientImage = (slug: string) => `/images/clients/${slug}`;
}

export default Routes;
