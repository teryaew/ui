import { Component } from 'protein-kit';

export default class Radio extends Component {
    types() {
        return {
            size: ['m', 'l'],
            type: [{
                'button': {
                    types: { size: ['s', 'm', 'l', 'xl'] }
                }
            }],
            view: [
                { 'action': {
                    types: { type: ['button'] }
                } },
                { 'extra': {
                    types: { type: ['button'] }
                } }
            ]
        };
    }

    default() {
        return {
            states: [
                'hovered',
                'checked',
                ['hovered', 'checked'],
                'focused',
                ['focused', 'checked'],
                'invalid',
                ['invalid', 'checked'],
                'disabled',
                ['disabled', 'checked']
            ],
            data: { text: 'Radio' }
        };
    }
}