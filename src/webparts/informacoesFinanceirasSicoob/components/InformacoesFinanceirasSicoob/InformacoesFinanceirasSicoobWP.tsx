import * as React from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import styles from './style.module.scss';

export default function InformacoesFinanceirasSicoobWP() {

    useEffect(() => {
        function chargeData() {
            axios.get('https://www.bcb.gov.br/api/servico/sitebcb/indicadorCambio')
                .then((data) => {
                    console.log(data)
                }).catch((err) => {
                    console.log(err)
                })
        };

        chargeData();

    });

    const data = { "conteudo": [{ "moeda": "Dólar", "valorCompra": 5.6351, "valorVenda": 5.6357, "dataIndicador": "2021-12-13T16:08:20Z", "tipoCotacao": "Fechamento" }, { "moeda": "Dólar", "valorCompra": 5.6682, "valorVenda": 5.6688, "dataIndicador": "2021-12-13T16:00:00Z", "tipoCotacao": "Intermediária" }, { "moeda": "Euro", "valorCompra": 6.3536, "valorVenda": 6.3548, "dataIndicador": "2021-12-13T16:08:20Z", "tipoCotacao": "Fechamento" }, { "moeda": "Euro", "valorCompra": 6.3909, "valorVenda": 6.3921, "dataIndicador": "2021-12-13T16:00:00Z", "tipoCotacao": "Intermediária" }] }

    return (
        <div className={styles.wpInformacoesFinanceiras}>
            <ul>
                < li >
                    <div className={styles.liLeft}>Dólar Compra</div>
                    <div className={styles.liRight}>R$ {data.conteudo[0].valorCompra}</div>
                </li>
                < li >
                    <div className={styles.liLeft}>Dólar Venda</div>
                    <div className={styles.liRight}>R$ {data.conteudo[0].valorVenda}</div>
                </li>
                < li >
                    <div className={styles.liLeft}>Euro Compra</div>
                    <div className={styles.liRight}>R$ {data.conteudo[2].valorCompra}</div>
                </li>
                < li >
                    <div className={styles.liLeft}>Euro Venda</div>
                    <div className={styles.liRight}>R$ {data.conteudo[2].valorVenda}</div>
                </li>

                < li >
                    <div className={styles.liLeft}>Selic (a.a)</div>
                    <div className={styles.liRight}>7.750%</div>
                </li>
                < li >
                    <div className={styles.liLeft}>CDI (a.a)</div>
                    <div className={styles.liRight}>7.650%</div>
                </li>
                < li >
                    <div className={styles.liLeft}>Poupança (a.m)</div>
                    <div className={styles.liRight}>0.441%</div>
                </li>
                < li >
                    <div className={styles.liLeft}>TR (a.m)</div>
                    <div className={styles.liRight}>0.000%</div>
                </li>
                < li >
                    <div className={styles.liLeft}>TBF (a.m)</div>
                    <div className={styles.liRight}>0.628%</div>
                </li>
                < li >
                    <div className={styles.liLeft}>TJLP (a.a)</div>
                    <div className={styles.liRight}>4.880%</div>
                </li>
                < li >
                    <div className={styles.liLeft}>IPCA (a.a)</div>
                    <div className={styles.liRight}>9.310%</div>
                </li>
                < li >
                    <div className={styles.liLeft}>IGPM (a.m)</div>
                    <div className={styles.liRight}>0.940%</div>
                </li>
            </ul>
        </div >
    );
}