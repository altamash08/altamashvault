import React from 'react';

const VaultBrand = ({ compact = false, light = false }) => (
  <span className={`vault-brand ${light ? 'vault-brand-light' : ''} ${compact ? 'vault-brand-compact' : ''}`} aria-label="AltamashVault">
    <span className="vault-brand-mark" aria-hidden="true"><span /></span>
    {!compact && <span className="vault-brand-name">Altamash<span>Vault</span></span>}
  </span>
);

export default VaultBrand;
