import style1 from '!!raw-loader!./create-related-issue.css';
import style2 from '!!raw-loader!./image-preview.css';
import style3 from '!!raw-loader!./issue-preview.css';

const style = document.createElement('style');
style.textContent = [style1, style2, style3].join('\n');
style.id = 'glp-style';
document.head.append(style);
