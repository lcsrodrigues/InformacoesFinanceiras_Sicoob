import * as React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import styles from './style.module.scss';

export default function InformacoesFinanceirasSicoobWP() {

    const [dolarCompra, setDolarCompra] = useState(0);
    const [dolarVenda, setDolarVenda] = useState(0);
    const [euroCompra, setEuroCompra] = useState(0);
    const [euroVenda, setEuroVenda] = useState(0);

    useEffect(() => {
        function chargeData() {
            axios.get("https://www.bcb.gov.br/api/servico/sitebcb/indicadorCambio/")
                .then((retorno) => {
                    setDolarCompra(retorno.data.conteudo[0].valorCompra);
                    setDolarVenda(retorno.data.conteudo[0].valorVenda);
                    setEuroCompra(retorno.data.conteudo[2].valorCompra);
                    setEuroVenda(retorno.data.conteudo[2].valorVenda);
                })
                .catch(function (err) {
                    console.log(err);
                })
        };

        chargeData();

    },[]);

    return (
        <div className={styles.wpInformacoesFinanceiras}>
            <ul>
                < li >
                    <div className={styles.liLeft}>Dólar Compra</div>
                    <div className={styles.liRight}>R$ {dolarCompra}</div>
                </li>
                < li >
                    <div className={styles.liLeft}>Dólar Venda</div>
                    <div className={styles.liRight}>R$ {dolarVenda}</div>
                </li>
                < li >
                    <div className={styles.liLeft}>Euro Compra</div>
                    <div className={styles.liRight}>R$ {euroCompra}</div>
                </li>
                < li >
                    <div className={styles.liLeft}>Euro Venda</div>
                    <div className={styles.liRight}>R$ {euroVenda}</div>
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