import pandas as pd
import json
import re
import os

# Archivos de entrada y salida
INPUT_FILE = "../data/teamDB2.xlsx"     # Archivo Excel o CSV con nuevos miembros
OUTPUT_FILE = "../data/team2.ts"        # Archivo donde se guardan los miembros

# def read_existing_ts_file(output_file):
#     """Lee el archivo TypeScript existente y devuelve la lista de miembros actuales."""
#     if not os.path.exists(output_file):
#         return []  # Si el archivo no existe, se asume que no hay datos previos

#     with open(output_file, "r", encoding="utf-8") as f:
#         content = f.read()

#     # Extraer el array de miembros usando regex
#     match = re.search(r"export const team: Tmember\[] = (\[.*\]);", content, re.DOTALL)
#     if match:
#         existing_data = json.loads(match.group(1))
#         return existing_data
#     return []

def read_existing_ts_file(output_file):
    """Lee el archivo TypeScript existente y extrae la lista de miembros."""
    if not os.path.exists(output_file):
        return []  # Si no existe, retornar lista vacía

    with open(output_file, "r", encoding="utf-8") as f:
        content = f.read()

    # Buscar el array de miembros sin afectar otros elementos del archivo
    match = re.search(r"export const team: Tmember\[] = (\[.*?\]);", content, re.DOTALL)

    if match:
        json_str = match.group(1)

        # Intentar limpiar y parsear JSON
        try:
            json_str = json_str.replace("None", "null").replace("nan", "null")
            return json.loads(json_str)
        except json.JSONDecodeError as e:
            print(f"⚠️ Error decodificando JSON en team.ts: {e}")
            return []

    return []


def read_excel_data(file):
    """Lee el archivo Excel o CSV y devuelve una lista de diccionarios con los datos."""
    if file.endswith(".xlsx"):
        df = pd.read_excel(file, dtype={"id": "Int64"})
    elif file.endswith(".csv"):
        df = pd.read_csv(file, dtype={"id": "Int64"})
    else:
        raise ValueError("Formato de archivo no compatible. Usa .xlsx o .csv")

    # Rellenar valores vacíos en la columna 'current' con False antes de convertir a booleano
    df["current"] = df["current"].fillna(False).astype(bool)

    df = df.fillna(" ")

    return df.to_dict(orient="records")

#def format_value(key, value):
#    """Formatea los valores correctamente según su tipo esperado en TypeScript."""
#    if key == "id":  # id es número
#        return str(value)
#    if key == "current":  # current es booleano
#        return "true" if value else "false"
#    return f'"{value}"' if isinstance(value, str) else str(value)

def format_value(key, value):
    """Formatea los valores correctamente según su tipo esperado en TypeScript."""
    if key == "id":
        return str(value)
    if key == "current":
        return "true" if value else "false"
    if isinstance(value, str):
        value = value.replace("`", "\\`")  # Escapar backticks por si acaso
        if key == "description":
            return f"`{value}`"  # Usar template literal con saltos de línea incluidos
        else:
            return f'"{value}"'
    return str(value)


def format_ts_data(data):
    """Formatea los datos en la estructura de TypeScript con tipos correctos."""
    ts_header = '''type Tmember = {
  id: number;
  senior: string;
  current: boolean; //1-> Current; 2-> Former; 3->PhD Student
  name: string;
  category: string;
  department: string;
  group: string;
  email: string;
  orcid: string;
  scholar: string;
  website: string;
  socialmedia_INSTA: string;
  socialmedia_IN: string;
  socialmedia_BSKY: string;
  imageID: string;
  description: string;
};

'''
    ts_data = "export const team: Tmember[] = [\n"
    
    for member in data:
        ts_data += "  {\n"
        ts_data += ",\n".join([f'    {key}: {format_value(key, value)}' for key, value in member.items()])
        ts_data += "\n  },\n"
    ts_data += "];\n"

    return ts_header + ts_data  # Agrega el header antes de los datos

def update_ts_file(new_data, output_file):
    """Lee el archivo existente, agrega los nuevos datos y actualiza el archivo TypeScript."""
    existing_data = read_existing_ts_file(output_file)

    # Filtrar solo los nuevos miembros que no están en el archivo actual (según ID)
    existing_ids = {member["id"] for member in existing_data}
    new_data_filtered = [member for member in new_data if member["id"] not in existing_ids]

    # Si no hay datos nuevos, no actualizar el archivo
    if not new_data_filtered:
        print("No hay nuevos miembros para agregar.")
        return

    # Combinar datos existentes con los nuevos
    updated_data = existing_data + new_data_filtered

    # Escribir el archivo actualizado
    formatted_data = format_ts_data(updated_data)
    with open(output_file, "w", encoding="utf-8") as f:
        f.write(formatted_data)

    print(f"Archivo {output_file} actualizado con {len(new_data_filtered)} nuevos miembros.")

def main():
    """Ejecuta el script de conversión y actualización."""
    new_data = read_excel_data(INPUT_FILE)
    update_ts_file(new_data, OUTPUT_FILE)

if __name__ == "__main__":
    main()

