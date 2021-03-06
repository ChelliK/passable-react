import passable from 'passable';

export const errors = {
    field_1: 'field_1 error string',
    field_2: 'field_2 error string',
    field_3: 'field_3 error string'
};

export const warnings = {
    field_4: 'field_4 error string',
    field_5: 'field_5 error string',
    field_6: 'field_6 error string'
};

export default function passes({ specific = [], data, custom }) {
    return passable('form_1', specific, (pass, enforce) => {
        pass('field_1', errors.field_1, () => {
            enforce(data.field_1.value).allOf({ largerThan: 5 })
        });
        pass('field_2', errors.field_2, () => true);
        pass('field_3', errors.field_3, () => false);
        pass('field_4', warnings.field_4, 'warn', () => {
            enforce(data.field_4.value).allOf({ largerThan: 5 });
        });
        pass('field_5', warnings.field_5, 'warn', () => true);
        pass('field_6', warnings.field_6, 'warn', () => false);
    }, custom);
}