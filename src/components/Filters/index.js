// Global
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
// Components
import { Input, Dropdown, Grid } from 'semantic-ui-react'
// Api
import { getFilters } from 'api';

const Filters = ({ filters, errors, search, onChange, onSearch }) => {
    // const [locale, setLocale] = useState();
    const [countries, setCountries] = useState();

    useEffect(() => {
        const fetchData = async () => {
            const response = await getFilters();
            const data = response.filters;

            // setLocale(data[0]);
            setCountries(data[1]);
        }

        void fetchData();
    }, []);

    // const localeValues = locale ? locale.values.map((local, index) => ({ text: local.name, value: local.value, key: index })) : null;
    const countryValues = countries ? countries.values.map((country, index) => ({ text: country.name, value: country.value, key: index })) : null;

    return(
        <Grid className='filters'>
            <Grid.Row className='filters__row-one' columns='1' stretched style={{ padding: '1rem ', top: '1rem' }}>
                <Grid.Column stretched>
                    <Input
                        label='Buscar'
                        placeholder='Buscar'
                        type='text'
                        icon='search'
                        value={search}
                        onChange={onSearch}
                    />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row columns='2' style={{ padding: '1rem 1rem 0 1rem' }}>
                <Grid.Column>
                    <label htmlFor='país'>País</label>
                    <Dropdown
                        id='país'
                        options={countryValues}
                        onChange={onChange('country')}
                        value={filters['country']}
                        error={errors['countryError']}
                        placeholder='País'
                        selection
                        fluid
                    />
                </Grid.Column>
                <Grid.Column stretched >
                    <label htmlFor='dataEHorario'>Data e Horário</label>
                    <Input
                        id='dataEHorario'
                        type='datetime-local'
                        step='1'
                        value={filters['timestamp']}
                        error={errors['timestampError']}
                        onChange={onChange('timestamp')}
                    />
                </Grid.Column>
            </Grid.Row>
        </Grid>
    );
};

Filters.propTypes = {
    filters: PropTypes.object,
    errors: PropTypes.object,
    search: PropTypes.string,
    onChange: PropTypes.func,
    onSearch: PropTypes.func,
};

export default Filters;
