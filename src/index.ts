import './styles/index.scss';

import IssuePreview from './services/IssuePreview';
import ImagePreview from './services/ImagePreview';

[ImagePreview, IssuePreview].forEach((Service) => new Service().init());
