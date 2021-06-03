## So sánh Redux và Context
### **Giống nhau**

>Redux và Context đều sinh ra để quản lý state. Chúng lưu dữ liệu vào một nơi, cung cấp cơ chế cho phép mỗi component có thể lấy state cũng như cập nhật state trực tiếp mà không cần qua các component trung gian.
### **Khác nhau**

**Redux**
- Redux lưu state trong một nơi duy nhất gọi là `store`. Store bao bọc cả app, vì thế mọi component trong app có thể truy cập và thay đổi state.
- Có thể thực hiện hành động bất đồng bộ nhờ middleware.

**Context**
- Có thể tạo nhiều context ở nhiều nơi khác nhau để lưu trữ dữ liệu. Chỉ những component nằm trong phạm vi của Context thì mới có thể truy cập được dữ liệu.
- Không thể thực hiện các hành động bất đồng bộ

## Khi nào nên dùng redux
- Có một lượng lớn state cần được sử dụng ở nhiều nơi trong ứng dụng.
- State của ứng dụng được cập nhật thường xuyên.
- Logic để cập nhật trạng thái đó phức tạp.
- Kích thước mã ứng dụng trung bình hoặc lớn và có thể được nhiều người sử dụng.
- Khi chúng ta cần middleware để thực hiện các hành động bất đồng bộ cho nhiểu mục đích như get Api...
- Khi muốn kiểm soát tốt hơn các action trong ứng dụng

## Khi nào nên dùng Context
- Khi không cần middleware để xử lý hành động bất đồng bộ
- Khi chúng ta chỉ cần tránh việc chuyển props qua nhiều cấp.
