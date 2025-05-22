import { API_URL } from "./url";

export default async function APIUPLOADIMAGE(file: File) {
  try {
    const token = localStorage.getItem('token');

    const formData = new FormData();
    formData.append("path_photo", file, file.name);

    const response = await fetch(`${API_URL}/upload`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erro na requisição de upload:', error);
    throw error;
  }
}
