#include <stdio.h>
#include <string.h>

// Khai báo cấu trúc Giáo viên
struct GiaoVien {
    char hoTen[50];
    int tuoi;
    char chuyenMon[50];
    char diaChi[100];
};

int main() {
    int n;

    printf("Nhap so luong giao vien: ");
    scanf("%d", &n);

    struct GiaoVien ds[100], temp;

    // Nhập danh sách giáo viên
    for (int i = 0; i < n; i++) {
        getchar(); // xóa bộ nhớ đệm

        printf("\nNhap thong tin giao vien thu %d:\n", i + 1);

        printf("Ho ten: ");
        fgets(ds[i].hoTen, sizeof(ds[i].hoTen), stdin);
        ds[i].hoTen[strcspn(ds[i].hoTen, "\n")] = 0;

        printf("Tuoi: ");
        scanf("%d", &ds[i].tuoi);
        getchar();

        printf("Chuyen mon: ");
        fgets(ds[i].chuyenMon, sizeof(ds[i].chuyenMon), stdin);
        ds[i].chuyenMon[strcspn(ds[i].chuyenMon, "\n")] = 0;

        printf("Dia chi: ");
        fgets(ds[i].diaChi, sizeof(ds[i].diaChi), stdin);
        ds[i].diaChi[strcspn(ds[i].diaChi, "\n")] = 0;
    }

    // Thuật toán sắp xếp chọn (Selection Sort)
    // Sắp xếp theo tuổi tăng dần
    for (int i = 0; i < n - 1; i++) {
        int min = i;

        for (int j = i + 1; j < n; j++) {
            if (ds[j].tuoi < ds[min].tuoi) {
                min = j;
            }
        }

        // Hoán đổi
        temp = ds[i];
        ds[i] = ds[min];
        ds[min] = temp;
    }

    // Xuất danh sách sau khi sắp xếp
    printf("\nDANH SACH GIAO VIEN SAU KHI SAP XEP:\n");

    for (int i = 0; i < n; i++) {
        printf("\nHo ten: %s\n", ds[i].hoTen);
        printf("Tuoi: %d\n", ds[i].tuoi);
        printf("Chuyen mon: %s\n", ds[i].chuyenMon);
        printf("Dia chi: %s\n", ds[i].diaChi);
        printf("------------------------\n");
    }

    return 0;
}