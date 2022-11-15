import moment from "moment";
import React from "react";
import { useTranslation } from "react-i18next";
import { IBaseEntity } from "../types/baseEntity";
import styles from "./hoursMetaData.module.scss";

export interface IHoursMetaDataProps {
  item: IBaseEntity;
}

const HoursMetaData: React.FC<IHoursMetaDataProps> = (
  props: IHoursMetaDataProps
) => {
  const { t } = useTranslation();
  return (
    <div className={styles.labeledControl}>
      <div className={styles.medaDataTable}>
        <div className={styles.medaDataRow}>
          <div className={styles.medaDataLabel}>
            {t("hoursMetaData.erstelltAm")}{" "}
            {moment(props.item.created).format("lll")} {t("hoursMetaData.von")}{" "}
            {props.item.createdBy?.name}
          </div>
        </div>
        <div className={styles.medaDataRow}>
          <div>
            {t("hoursMetaData.zuletztGeandertAm")}{" "}
            {moment(props.item.edited).format("lll")} {t("hoursMetaData.von")}{" "}
            {props.item.editedBy?.name}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HoursMetaData;
