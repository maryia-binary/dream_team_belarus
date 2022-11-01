/* eslint-disable @typescript-eslint/ban-ts-comment */
//@ts-nocheck
import React from 'react';
import PageError from 'components/page-error';
import { routes } from 'utils';
import { localize } from 'translations';
import 'styles/page-404.scss';

const Page404 = () => (
    <PageError
        header={localize('We couldn’t find that page')}
        messages={[
            localize('You may have followed a broken link, or the page has moved to a new address.'),
            localize('Error code: {{error_code}} page not found', { error_code: 404 }),
        ]}
        redirect_urls={[routes.deriv_air]}
        redirect_labels={[localize('Return to trade')]}
        classNameImage='page-404__image'
        image_url={'/404.png'}
    />
);

export default Page404;
