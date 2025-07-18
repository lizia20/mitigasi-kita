import { fetchHistoryList, deleteHistoryItem } from "../src/utils/auth";
import MySwal from "sweetalert2";

export async function loadHistoryListPresenter(setHistoryList, navigate) {
  const token = localStorage.getItem("accessToken");
  if (!token) {
    console.error("Token tidak ditemukan");
    return;
  }

  try {
    const data = await fetchHistoryList(token);
    setHistoryList(data);
  } catch (error) {
    console.error("Gagal memuat history:", error.message);
    if (error.status === 404) {
      MySwal.fire({
        icon: "info",
        title: "Tidak Ada Riwayat",
        text: "Simpan Prediksi Untuk Menampilkan Riwayat",
        confirmButtonColor: "#0D3553",
        customClass: {
          popup: "font-poppins",
        },
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/map");
        }
      });
    }
  }
}

export async function deleteHistoryPresenter(id, setHistoryList) {
  const token = localStorage.getItem("accessToken");
  if (!token) {
    console.error("Token tidak ditemukan");
    return;
  }

  try {
    const result = await MySwal.fire({
      title: "Yakin ingin menghapus data ini?",
      text: "Data yang dihapus tidak bisa dikembalikan!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Ya, hapus!",
      cancelButtonText: "Batal",
      confirmButtonColor: "#C73134",
      cancelButtonColor: "#0D3553",
      showLoaderOnConfirm: true,
      background: "#fff",
      customClass: {
        popup: "font-poppins",
      },
      preConfirm: async () => {
        try {
          await deleteHistoryItem(id, token);
          setHistoryList((prevList) =>
            prevList.filter((item) => item.id !== id),
          );
        } catch (error) {
          MySwal.showValidationMessage(`Gagal hapus: ${error.message}`);
          throw error;
        }
      },
      allowOutsideClick: () => !MySwal.isLoading(),
    });

    if (result.isConfirmed) {
      await MySwal.fire({
        icon: "success",
        title: "Terhapus!",
        text: "Data berhasil dihapus.",
        timer: 2000,
        showConfirmButton: false,
        background: "#fff",
        customClass: {
          popup: "font-poppins",
        },
      });
    }
  } catch (error) {
    console.error("Gagal menghapus history:", error.message);
  }
}
