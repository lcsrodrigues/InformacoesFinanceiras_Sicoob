import * as React from 'react';
import { IInformacoesFinanceirasSicoobProps } from './IInformacoesFinanceirasSicoobProps';
import InformacoesFinanceirasSicoobWP from './InformacoesFinanceirasSicoob/InformacoesFinanceirasSicoobWP';

export default function InformacoesFinanceirasSicoob({ ...props }: IInformacoesFinanceirasSicoobProps) {
  return (
    <InformacoesFinanceirasSicoobWP props={props} />
  );
}
