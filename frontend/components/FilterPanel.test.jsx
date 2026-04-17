import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import FilterPanel from './FilterPanel';

const defaultFilters = { minPrice: '', maxPrice: '', location: '', propertyType: '' };

describe('FilterPanel', () => {
  test('renders all four filter inputs', () => {
    render(<FilterPanel filters={defaultFilters} onChange={() => {}} />);
    expect(screen.getByLabelText(/min price/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/max price/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/location/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/property type/i)).toBeInTheDocument();
  });

  test('reflects current filter values', () => {
    const filters = { minPrice: '100000', maxPrice: '500000', location: 'London', propertyType: 'flat' };
    render(<FilterPanel filters={filters} onChange={() => {}} />);
    expect(screen.getByLabelText(/min price/i)).toHaveValue(100000);
    expect(screen.getByLabelText(/max price/i)).toHaveValue(500000);
    expect(screen.getByLabelText(/location/i)).toHaveValue('London');
    expect(screen.getByLabelText(/property type/i)).toHaveValue('flat');
  });

  test('calls onChange with updated minPrice', () => {
    const onChange = jest.fn();
    render(<FilterPanel filters={defaultFilters} onChange={onChange} />);
    fireEvent.change(screen.getByLabelText(/min price/i), { target: { name: 'minPrice', value: '200000' } });
    expect(onChange).toHaveBeenCalledWith({ ...defaultFilters, minPrice: '200000' });
  });

  test('calls onChange with updated maxPrice', () => {
    const onChange = jest.fn();
    render(<FilterPanel filters={defaultFilters} onChange={onChange} />);
    fireEvent.change(screen.getByLabelText(/max price/i), { target: { name: 'maxPrice', value: '800000' } });
    expect(onChange).toHaveBeenCalledWith({ ...defaultFilters, maxPrice: '800000' });
  });

  test('calls onChange with updated location', () => {
    const onChange = jest.fn();
    render(<FilterPanel filters={defaultFilters} onChange={onChange} />);
    fireEvent.change(screen.getByLabelText(/location/i), { target: { name: 'location', value: 'Manchester' } });
    expect(onChange).toHaveBeenCalledWith({ ...defaultFilters, location: 'Manchester' });
  });

  test('calls onChange with updated propertyType', () => {
    const onChange = jest.fn();
    render(<FilterPanel filters={defaultFilters} onChange={onChange} />);
    fireEvent.change(screen.getByLabelText(/property type/i), { target: { name: 'propertyType', value: 'house' } });
    expect(onChange).toHaveBeenCalledWith({ ...defaultFilters, propertyType: 'house' });
  });

  test('preserves other filter values when one changes', () => {
    const onChange = jest.fn();
    const filters = { minPrice: '100000', maxPrice: '500000', location: 'London', propertyType: 'flat' };
    render(<FilterPanel filters={filters} onChange={onChange} />);
    fireEvent.change(screen.getByLabelText(/location/i), { target: { name: 'location', value: 'Bristol' } });
    expect(onChange).toHaveBeenCalledWith({ ...filters, location: 'Bristol' });
  });
});
