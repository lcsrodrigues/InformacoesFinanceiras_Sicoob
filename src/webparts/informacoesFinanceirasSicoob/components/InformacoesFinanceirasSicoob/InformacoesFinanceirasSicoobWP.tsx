import * as React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import styles from './style.module.scss';

export default function InformacoesFinanceirasSicoobWP({ props }) {

    const [dolarCompra, setDolarCompra] = useState(0);
    const [dolarVenda, setDolarVenda] = useState(0);
    const [euroCompra, setEuroCompra] = useState(0);
    const [euroVenda, setEuroVenda] = useState(0);
    const [oResult, setResult] = useState([]);

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
        getAllInformacoesFinanceiras();
    }, []);

    const getAllInformacoesFinanceiras = () => {
        var url =
            "/_api/web/lists/getbytitle('Informacoes Financeiras')/items?" +
            "$top=1&" +
            "$orderby=ID desc"

        axios.get("https://crediminas.sharepoint.com/sites/intranet/" + url)
            .then(result => {
                if (result.data.value.length) {
                    setResult(result.data.value);
                } else {
                    setResult([]);
                }
            })
            .catch(error => {
                console.log(error);
            });
    };

    const formatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    });

    const convert = (value) => {
        return value.toString().replace(".", ",");
    };

    return (
        <div className={styles.wpInformacoesFinanceiras}>
            <ul>
                <li>
                    <div className={styles.liLeft}>Dólar Compra</div>
                    <div className={styles.liRight}>R$ {dolarCompra}</div>
                </li>
                <li>
                    <div className={styles.liLeft}>Dólar Venda</div>
                    <div className={styles.liRight}>R$ {dolarVenda}</div>
                </li>
                <li>
                    <div className={styles.liLeft}>Euro Compra</div>
                    <div className={styles.liRight}>R$ {euroCompra}</div>
                </li>
                <li>
                    <div className={styles.liLeft}>Euro Venda</div>
                    <div className={styles.liRight}>R$ {euroVenda}</div>
                </li>

                {
                    oResult.length ?
                        oResult.map(data => {
                            return (
                                <>
                                    <li>
                                        <div className={styles.liLeft}>Selic (a.a)</div>
                                        <div className={styles.liRight}>{convert(data.field_2)}%</div>
                                    </li>
                                    <li>
                                        <div className={styles.liLeft}>CDI (a.a)</div>
                                        <div className={styles.liRight}>{convert(data.field_3)}%</div>
                                    </li>
                                    <li>
                                        <div className={styles.liLeft}>Poupança (a.m)</div>
                                        <div className={styles.liRight}>{convert(data.field_4)}%</div>
                                    </li>
                                    <li>
                                        <div className={styles.liLeft}>TR (a.m)</div>
                                        <div className={styles.liRight}>{convert(data.field_5)}%</div>
                                    </li>
                                    <li>
                                        <div className={styles.liLeft}>TBF (a.m)</div>
                                        <div className={styles.liRight}>{convert(data.field_6)}%</div>
                                    </li>
                                    <li>
                                        <div className={styles.liLeft}>TJLP (a.a)</div>
                                        <div className={styles.liRight}>{convert(data.field_7)}%</div>
                                    </li>
                                    <li>
                                        <div className={styles.liLeft}>IPCA (a.a)</div>
                                        <div className={styles.liRight}>{convert(data.field_8)}%</div>
                                    </li>
                                    <li>
                                        <div className={styles.liLeft}>IGPM (a.m)</div>
                                        <div className={styles.liRight}>{convert(data.field_9)}%</div>
                                    </li>
                                </>
                            )
                        })
                        :
                        <><h1>Sem Resultados</h1></>
                }
            </ul>
        </div >
    );
}