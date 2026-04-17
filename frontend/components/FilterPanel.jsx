'use client';

export default function FilterPanel({ filters, onChange }) {
  function handleChange(e) {
    const { name, value } = e.target;
    onChange({ ...filters, [name]: value });
  }

  return (
    <div className="filter-panel">
      <div className="filter-panel__group">
        <label className="filter-panel__label" htmlFor="minPrice">Min Price (£)</label>
        <input className="filter-panel__input" id="minPrice" name="minPrice" type="number" placeholder="e.g. 100000" value={filters.minPrice ?? ''} onChange={handleChange} />
      </div>
      <div className="filter-panel__group">
        <label className="filter-panel__label" htmlFor="maxPrice">Max Price (£)</label>
        <input className="filter-panel__input" id="maxPrice" name="maxPrice" type="number" placeholder="e.g. 500000" value={filters.maxPrice ?? ''} onChange={handleChange} />
      </div>
      <div className="filter-panel__group">
        <label className="filter-panel__label" htmlFor="location">Location</label>
        <input className="filter-panel__input" id="location" name="location" type="text" placeholder="e.g. London" value={filters.location ?? ''} onChange={handleChange} />
      </div>
      <div className="filter-panel__group">
        <label className="filter-panel__label" htmlFor="propertyType">Property Type</label>
        <select className="filter-panel__select" id="propertyType" name="propertyType" value={filters.propertyType ?? ''} onChange={handleChange}>
          <option value="">All Types</option>
          <option value="house">House</option>
          <option value="flat">Flat</option>
          <option value="studio">Studio</option>
        </select>
      </div>
    </div>
  );
}
