import { expect } from 'chai';
import { step } from 'mocha-steps';

import Renderer from '../../../testHelpers/Renderer';
import { updateContent } from '../../../testHelpers/testUtils';

describe('Page not found example UI works', () => {
    const renderer = new Renderer({});
    let app;
    let content;

    step('404 page renders with sample text', () => {
        app = renderer.mount();
        renderer.history.push('/non-existing-page');
        content = updateContent(app.container);
        expect(content.textContent).to.include('Page not found - 404');
    });
});
