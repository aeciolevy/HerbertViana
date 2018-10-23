import React, { Fragment, Component } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import globalTranslations from '../../translations/global.json';
import { withLocalize } from 'react-localize-redux';

class LocalizeRoot extends Component {
    constructor(props) {
        super(props);
        this.props.initialize({
            languages: [
                { name: 'Portuguese', code: 'pt-br' },
                { name: 'English', code: 'en' },
            ],
            translation: globalTranslations,
            options: {
                renderToStaticMarkup,
                defaultLanguage: 'pt-br',
            },
        });
    }

    render() {
        return (
            <Fragment>
            </Fragment>
        );
    }
};

export default withLocalize(LocalizeRoot);
