import Component from './Component';
import {User} from '../../types/User';

export class UserComponent extends Component<'div'> {
    constructor(user: User) {
        super('div', {
            classes: 'assignee-grid gl-flex gl-w-full gl-items-center',
            children: [
                {
                    tag: 'img',
                    classes: 'gl-avatar gl-avatar-circle gl-avatar-s24',
                    attrs: {
                        src: user.avatarUrl,
                        alt: "${assignee.name}'s avatar",
                    },
                },
                {
                    tag: 'span',
                    html: user.name,
                },
            ],
        });
    }
}
