/* eslint-disable jsx-a11y/alt-text */
import {
  Document,
  Page,
  View,
  Image,
  Text,
  StyleSheet,
} from "@react-pdf/renderer";
export function ReporteRecibo({ recibos,fechaInicio,fechaFinal }: { recibos: any[],fechaInicio:string,fechaFinal:string }) {
  const style = StyleSheet.create({
    tabla: {
      display: "flex",
      width: "auto",
      fontSize: "10px",
      marginTop: "20px",
      flexDirection: "row",
      marginHorizontal: "20px",
      backgrounbdColor: "#d1d5db",
    },
    filaHeader: {
      backgrounbdColor: "#d1d5db",
      flexDirection: "row",
    },
  });

  return (
    <Document>
      <Page size={"LETTER"} orientation="landscape">
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignContent: "space-between",
            justifyContent: "space-between",
            margin: "20px",
          }}
          fixed
        >
          <Image
            src="/logo.jpg"
            style={{ width: "110px", height: "55px", marginRight: "15px" }}
          />
          <View>
            <Text style={{ fontSize: 12, textAlign: "center" }}>Recibos</Text>
            <Text style={{ fontSize: 10, textAlign: "center" }}>
              Desde: {fechaInicio}
            </Text>
            <Text style={{ fontSize: 10, textAlign: "center" }}>
              Hasta: {fechaFinal}
            </Text>
          </View>
          <View>
          <Text style={{ fontSize: 10, textAlign: "center" }} render={({ pageNumber, totalPages }) => (
        `${pageNumber} / ${totalPages}`
      )}  />
          </View>
        </View>
        {/* Tabla */}
        <View
          style={{
            display: "flex",
            width: "auto",
            fontSize: "10px",
            marginTop: "20px",
            flexDirection: "column",
            marginHorizontal: "20px",
          }}
        >
          {/* Fila Header */}
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              borderBottomStyle: "solid",
              borderBottomColor: "#1d4ed8",
              fontWeight: "bold",
              padding: "5px",
              backgroundColor: "#93c5fd",
            }}
          >
            {/* columna */}
            <View
              style={{
                width: "70px",
                paddingRight: "7px",
                paddingLeft: "7px",
                borderRightStyle: "solid",
                borderRightColor: "#1d4ed8",
                borderRightWidth: "2px",
                textAlign: "center",
              }}
            >
              <Text>Fecha</Text>
            </View>
            <View
              style={{
                width: "60px",
                paddingRight: "7px",
                paddingLeft: "7px",
                borderRightStyle: "solid",
                borderRightColor: "#1d4ed8",
                borderRightWidth: "2px",
                textAlign: "center",
              }}
            >
              <Text>Recibo</Text>
            </View>
            <View
              style={{
                width: "85px",
                paddingRight: "7px",
                paddingLeft: "7px",
                borderRightStyle: "solid",
                borderRightColor: "#1d4ed8",
                borderRightWidth: "2px",
                textAlign: "center",
              }}
            >
              <Text>R.U.C</Text>
            </View>
            <View
              style={{
                width: "90px",
                paddingRight: "7px",
                paddingLeft: "7px",
                borderRightStyle: "solid",
                borderRightColor: "#1d4ed8",
                borderRightWidth: "2px",
                textAlign: "center",
              }}
            >
              <Text>RIF/CEDULA</Text>
            </View>
            <View
              style={{
                width: "250px",
                paddingRight: "7px",
                paddingLeft: "7px",
                borderRightStyle: "solid",
                borderRightColor: "#1d4ed8",
                borderRightWidth: "2px",
                textAlign: "center",
              }}
            >
              <Text>Nombre o Razon Social</Text>
            </View>
            <View
              style={{
                width: "150px",
                paddingRight: "7px",
                paddingLeft: "7px",
                borderRightStyle: "solid",
                borderRightColor: "#1d4ed8",
                borderRightWidth: "2px",
                textAlign: "center",
              }}
            >
              <Text>Tributo</Text>
            </View>
            <View
              style={{
                width: "60px",
                paddingRight: "7px",
                paddingLeft: "7px",
                borderRightStyle: "solid",
                borderRightColor: "#1d4ed8",
                borderRightWidth: "2px",
                textAlign: "center",
              }}
            >
              <Text>Monto</Text>
            </View>
            <View
              style={{
                width: "50px",
                paddingRight: "7px",
                paddingLeft: "7px",
                borderRightStyle: "solid",
                borderRightColor: "#1d4ed8",
                borderRightWidth: "2px",
                textAlign: "center",
              }}
            >
              <Text>Estado</Text>
            </View>
          </View>

          {recibos.length > 0 &&
            recibos.map((recibo) => (
              <View
                key={recibo.recibo_id}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  borderBottomStyle: "solid",
                  borderBottomColor: "#1d4ed8",
                  fontWeight: "bold",
                  padding: "5px",
                }}
              >
                {/* columna */}
                <View
                  style={{
                    width: "70px",
                    paddingRight: "7px",
                    paddingLeft: "7px",
                    fontSize: "8px",
                  }}
                >
                  <Text>{recibo.fecha}</Text>
                </View>
                <View
                  style={{
                    width: "60px",
                    paddingRight: "7px",
                    paddingLeft: "7px",
                    fontSize: "8px",
                    textAlign: "center",
                  }}
                >
                  <Text>{recibo.numeroControl}</Text>
                </View>
                <View
                  style={{
                    width: "85px",
                    paddingRight: "7px",
                    paddingLeft: "7px",
                    fontSize: "8px",
                  }}
                >
                  <Text>{recibo.idRmfi}</Text>
                </View>
                <View
                  style={{
                    width: "90px",
                    paddingRight: "7px",
                    paddingLeft: "7px",
                    fontSize: "8px",
                  }}
                >
                  <Text>{recibo.idContribuyente}</Text>
                </View>
                <View
                  style={{
                    width: "250px",
                    paddingRight: "7px",
                    paddingLeft: "7px",
                    fontSize: "7px",
                  }}
                >
                  <Text>{recibo.referencia}</Text>
                </View>
                <View
                  style={{
                    width: "150px",
                    paddingRight: "7px",
                    paddingLeft: "7px",
                    fontSize: "7px",
                  }}
                >
                  <Text>{recibo.detalle}</Text>
                </View>
                <View
                  style={{
                    width: "60px",
                    paddingRight: "7px",
                    paddingLeft: "7px",
                    fontSize: "8px",
                  }}
                >
                  <Text>{recibo.monto}</Text>
                </View>
                <View
                  style={
                    recibo.estado
                      ? {
                          width: "50px",
                          paddingRight: "7px",
                          paddingLeft: "7px",
                          fontSize: "8px",
                          backgroundColor: "#22c55e",
                          borderRadius: "25px",
                        }
                      : {
                          width: "50px",
                          paddingRight: "7px",
                          paddingLeft: "7px",
                          fontSize: "8px",
                          backgroundColor: "#fde047",
                          borderRadius: "25px",
                        }
                  }
                >
                  <Text>{recibo.estado ? "Pagado" : "Pendiente"}</Text>
                </View>
              </View>
            ))}
        </View>
      </Page>
    </Document>
  );
}
