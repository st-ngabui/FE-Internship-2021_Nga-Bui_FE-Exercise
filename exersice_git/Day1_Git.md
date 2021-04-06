# Git là gì?
**Git** là là hệ thống kiểm soát phiên bản phân tán mà nguồn mở ( *Open Source Distributed Version Control System*).
`
 >Các dự án thực tế thường có nhiều nhà phát triển làm việc song song. Vì vậy, một hệ thống kiểm soát phiên bản như Git là cần thiết để đảm bảo không có xung đột mã giữa các nhà phát triển. Ngoài ra, các yêu cầu trong dự án thay đổi thường xuyên. Vì vậy, cần một hệ thống cho phép nhà phát triển quay lại phiên bản cũ hơn của mã.
# Repository là gì? Có mấy loại repository?
**Reponsitory**  hay còn gọi là `Repo`, dịch ra tiếng Việt có nghĩa là kho, đây chính là nơi chứa tất cả mã nguồn cho một dự án được tạo bởi Git.

>Bạn có thể hiểu một cách khác là Repository chính khai báo thư mục chứa dự án của bạn trên local hoặc remote. Một repo sẽ có hai cấu trúc dữ liệu chính đó là Object store và Index được lưu trữ ẩn trong thư mục .git .

Có hai loại repository là `local repository` và `remote repository`:

- **Local repository:** là repo được cài đặt trên máy tính của lập trình viên, repo này sẽ đồng bộ hóa với remote bằng các lệnh của Git.

- **Remote repository:** là repo được cài đặt trên server chuyên dụng, điển hình hiện nay là Github.

### **Để add 1 file vào stage**

```
git add {tên file}
```
### **Để add 1 tất cả các file vào stage**

```
git add .
```
## So sánh `git commit -m` và git `commit -am`
- **`Git commit -m`** là chỉ để commit
- **`Git commit -am`** vừa bao gồm add và commit
