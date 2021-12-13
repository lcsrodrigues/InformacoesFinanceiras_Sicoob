import * as React from 'react';
import styles from './InformacoesFinanceirasSicoob.module.scss';
import { IInformacoesFinanceirasSicoobProps } from './IInformacoesFinanceirasSicoobProps';
import InformacoesFinanceirasSicoobWP from './InformacoesFinanceirasSicoob/InformacoesFinanceirasSicoobWP';

export default class InformacoesFinanceirasSicoob extends React.Component<IInformacoesFinanceirasSicoobProps, {}> {
  public render(): React.ReactElement<IInformacoesFinanceirasSicoobProps> {

    return (
      <InformacoesFinanceirasSicoobWP />
    );
  }
}
