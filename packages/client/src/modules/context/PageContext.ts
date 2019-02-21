import React from 'react';

export const PageContext = React.createContext({
    defaultPage: null,
    name: null,
    template: null,
    title: null,
    typeCode: null,
    uid: null,
    contentSlots: null
});
