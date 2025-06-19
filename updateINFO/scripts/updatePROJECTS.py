import pandas as pd
import json
import os

# Archivos de entrada y salida
INPUT_FILE = "../data/projectsMBE.xlsx"
OUTPUT_FILE = "../../public/info/projects.json"

def read_excel_data(file):
    """Lee el archivo Excel y devuelve una lista de diccionarios."""
    if file.endswith(".xlsx"):
        df = pd.read_excel(file, dtype={"id": "Int64"})
    else:
        raise ValueError("Formato de archivo no compatible. Usa .xlsx")

    df = df.fillna(" ")
    return df.to_dict(orient="records")

def save_as_json(data, output_file):
    """Guarda los datos como JSON."""
    with open(output_file, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)

    print(f"✅ Archivo JSON guardado en {output_file} con {len(data)} proyectos.")

def main():
    data = read_excel_data(INPUT_FILE)
    save_as_json(data, OUTPUT_FILE)

if __name__ == "__main__":
    main()
 
