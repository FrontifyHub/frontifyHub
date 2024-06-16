export enum RelativeSizeUnit {
  PERCENT = '%',
  EM = 'em',
  REM = 'rem',
  VH = 'vh',
  VW = 'vw'
}

export interface RelativeSize {
  value: number;
  unit: RelativeSizeUnit.PERCENT | RelativeSizeUnit.EM | RelativeSizeUnit.REM | RelativeSizeUnit.VH | RelativeSizeUnit.VW;
}
