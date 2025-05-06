import pandas as pd
import json
import re
import os

# Archivos de entrada y salida
INPUT_FILE = "../data/projectsWEB.xlsx"     # Archivo Excel con informacion proyectos 
OUTPUT_FILE = "../data/projects.ts"        # Archivo donde se guardan los proyectos


def ts_to_json_compatible(ts_string):
    """Convierte el contenido de projects.ts a algo que se pueda leer como JSON."""
    import re, json

    # Extrae solo la parte que es un array
    match = re.search(r"export const projects: Tproject\[] = (\[.*?\]);", ts_string, re.DOTALL)
    if not match:
        return []

    array_str = match.group(1)

    # Agrega comillas a las claves (id: => "id":)
    array_str = re.sub(r'(\s*)(\w+):', r'\1"\2":', array_str)

    try:
        return json.loads(array_str)
    except json.JSONDecodeError as e:
        print(f"⚠️ Error decodificando JSON: {e}")
        return []


def read_existing_ts_file(output_file):
    """Lee el archivo TypeScript existente y extrae la lista de proyectos."""
    if not os.path.exists(output_file):
        return []  # Si no existe, retornar lista vacía

    with open(output_file, "r", encoding="utf-8") as f:
        content = f.read()
    return ts_to_json_compatible(content)

def read_excel_data(file):
    """Lee el archivo Excel o CSV y devuelve una lista de diccionarios con los datos."""
    if file.endswith(".xlsx"):
        df = pd.read_excel(file, dtype={"id": "Int64"})
    elif file.endswith(".csv"):
        df = pd.read_csv(file, dtype={"id": "Int64"})
    else:
        raise ValueError("Formato de archivo no compatible. Usa .xlsx o .csv")

    # Rellenar valores vacíos en la columna 'current' con False antes de convertir a booleano
    # df["current"] = df["current"].fillna(False).astype(bool)

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
    # if key == "current":
        # return "true" if value else "false"
    if isinstance(value, str):
        value = value.replace("`", "\\`")  # Escapar backticks por si acaso
        if key == "summary":
            return f"`{value}`"  # Usar template literal con saltos de línea incluidos
        else:
            return f'"{value}"'

        
    if key=="start":
      #     "agregar aqui una instruccion para detectar guion - en fecha para forzar que vaya ese formato de fecha"
      #     "sino se encuentra el - en la fecha, omitir ese campo del exccel y notificar via mensaje en terminal"
      return print(value)

    return str(value)


def format_ts_data(data):
    """Formatea los datos en la estructura de TypeScript con tipos correctos."""
    ts_header = '''type Tproject = {
  id: number;
  email: string;
  researcher: string;
  piproject: string;
  nameProject: string;
  projectID: string;
  start: string;
  end: string;
  summary: string;
  websiteProject: string;
  fundingAgency: string;
  socialNetwork_x: string;
  socialNetwork_bsky: string;
  socialNetwork_inst: string;
  imageID_logo: string;
  imageID_FunAgen: string;
  imageID_ex1: string;
  imageID_ex2: string;
  imageID_ex3: string;
};

'''
    ts_data = "export const projects: Tproject[] = [\n"
    
    for member in data:
        ts_data += "  {\n"
        ts_data += ",\n".join([f'    {key}: {format_value(key, value)}' for key, value in member.items()])
        ts_data += "\n  },\n"
    ts_data += "];\n"

    return ts_header + ts_data  # Agrega el header antes de los datos

def update_ts_file(new_data, output_file):
    """Lee el archivo existente, agrega los nuevos datos y actualiza el archivo TypeScript."""
    existing_data = read_existing_ts_file(output_file)

    # Filtrar solo los nuevos proyectos que no están en el archivo actual (según ID)
    existing_ids = {member["id"] for member in existing_data}
    new_data_filtered = [member for member in new_data if member["id"] not in existing_ids]

    # Si no hay datos nuevos, no actualizar el archivo
    if not new_data_filtered:
        print("No hay nuevos proyectos para agregar.")
        return

    # Combinar datos existentes con los nuevos
    updated_data = existing_data + new_data_filtered

    # Escribir el archivo actualizado
    formatted_data = format_ts_data(updated_data)
    with open(output_file, "w", encoding="utf-8") as f:
        f.write(formatted_data)

    print(f"Archivo {output_file} actualizado con {len(new_data_filtered)} nuevos proyectos.")

def main():
    """Ejecuta el script de conversión y actualización."""
    new_data = read_excel_data(INPUT_FILE)
    update_ts_file(new_data, OUTPUT_FILE)

if __name__ == "__main__":
    main()

