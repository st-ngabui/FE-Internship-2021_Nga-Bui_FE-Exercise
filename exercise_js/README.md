## Null and Undefined

**`NULL`**

- Null nghĩa là empty hoặc là một giá trị không tồn tại. Null được cấp phát, và nó có nghĩa là không có gì cả.

        var test1 = null;
        console.log(test1); //null

**`Undefined`**

- Undefined nghĩa là biến nào đó đã được khai báo, tuy nhiên lại không được gán giá trị. Ví dụ:

        var test2;
        console.log(test2);// undefined

## What is use strict ?

- Use strict dịch sang tiếng việt thì có nghĩa là sử dụng sự nghiêm ngặt. Khi một đoạn lệnh được khai báo use strict thì tất cả các dòng code ở phía dưới dòng khai báo use strict sẽ được quản lý một cách nghiêm ngặt hơn về cú pháp.

**Ưu điểm**

- Ngăn chặn sử dụng, và throw errors khi người lập trình thực hiện những xử lý được coi là unsafe, những xử lý mà có thể là ngoài ý muốn.
- Vô hiệu hoá các tính năng có thể gây nhầm lẫn, hoặc không nên được sử dụng.
- Ngăn chặn sử dụng một số từ mà có thể sẽ được sử dụng làm keywork trong tương lai.

**Nhược điểm**

- Không thể sử dụng một biến mà không khái báo
- Báo lỗi ở những assignments vốn không thể thực hiện
- Báo lỗi khi delete những thứ không thể xoá
- Các tham số của một hàm không được phép trùng nhau
- Không sử dụng được cách viết số thuộc hệ bát phân với tiền tố là 0
- Không thể sử dụng with

## The differences between == and ===

- `==` là phép so sánh về giá trị, không so sánh kiểu dữ liệu
- `===` là phép so sánh cả giá trị và kiểu dữ liệu

        3 == '3' //true
        3 === '3' //false

## Values in the FALSE group.

- undefined
- null
- NaN
- 0
- ""
- false
