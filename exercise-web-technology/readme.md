## **Server side rendering (SSR)**
`Server side rendering` hay SSR là cách thông thường cho việc render trang web ở trình duyệt. Như các bước mô tả bên dưới cách truyền thống để rendering nội dung web như các bước dưới đây :
        
  1. Người dùng gửi một yêu cầu tới website( Thông thường thông qua trình duyệt).
  2. Phía server kiểm tra và chuẩn bị nội dung HTML sau khi đã đi qua một lượt các script có trong trang web.
  3. Các đoạn HTML đã được biên dịch được gửi tới trình duyệt của người dùng cho việc render.
  4. Trình duyệt tải về HTML và làm các trang có thể nhìn thấy với người dùng.
  5. Trình duyệt sau đó tải về Javasciprt(JS) và tiến hành thực thi JS, nó làm cho trang web có thể tương tác.

**Ưu điểm**

- Initial load nhanh, dễ otpimize, vì toàn bộ dữ liệu đã được xử lý ở server, client chỉ việc hiển thị.
- Các web framework từ xưa đến nay đều hỗ trợ cơ chế này
- Dễ hiểu và dễ code hơn. Developer chỉ cần code 1 project web là được, không cần phải tách ra front-end và back-end
- Chạy được trên phần lớn mọi trình duyệt, kể cả disable JavaScript vẫn chạy tốt

**Nhược điểm**
- Mỗi lần người dùng chuyển trang là site phải load lại nhiều lần, gây khó chịu
- Nặng server vì server phải xử lý nhiều logic và dữ liệu. Có thể sử dụng caching để giảm tải.
- Tốn băng thông vì server phải gửi nhiều dữ liệu thừa và trùng (HTML, header, footer). Có thể sử dụng CDN để giảm tải.
- Tương tác không tốt như Client Side rendering vì trang phải refresh, load lại nhiều lần

## **Client side rendering (CSR)**

- Những logic đơn giản (validation, đọc dữ liệu, sorting, filtering) nằm ở client side
- Logic để routing (chuyển trang), render (hiển thị) dữ liệu thì hầu hết nằm ở client side, đương nhiên vẫn có một số ứng dụng routing vẫn do server quản lý
- Logic phức tạp (thanh toán, phân quyền) hoặc cần xử lý nhiều (data processing, report) vẫn nằm ở server side.

 *Luồng hoạt động của CSR*:

  1. Người dùng gửi request tới webiste
  2. Thay vì một server, một con CDN có thể được sử dụng để gửi HTML, CSS và các file hỗ trợ cho người dùng.
  3. Trình duyệt tải HTML và JS trong khi nhìn thấy một biểu tượng loading
  4. Sau khi trình duyệt lấy JS về, nó sẽ tạo các yêu cầu API thông qua Ajax và lấy về các nội dung động và xử lí chúng để render ra nội dung cuối cùng.
  5. Sau khi server phản hồi, nội dung cuối cùng sẽ được render sử dụng quá trình xử lí DOM trên trình duyệt người dùng.

  **Ưu điểm**
  - Page chỉ cần load một lần duy nhất. Khi user chuyển trang hoặc thêm dữ liệu, JavaScript sẽ lấy và gửi dữ liệu từ server qua AJAX. User có thể thấy dữ liệu mới mà không cần chuyển trang.
  - Chuyển logic sang client nên giảm tải được một phần cho server
  - Giảm được băng thông do chỉ cần lấy JSON và dữ liệu cần thiết, thay vì phải lấy toàn bộ trang
  - Với các ứng dụng cần tương tác nhiều, SPA hoạt động mượt mà hơn vì code chạy trên browser, không cần load đi loại lại nhiều

**Nhược điểm**

- Initial load sẽ chậm hơn nếu không biết optimize. Lý do là broser phải tải toàn bộ JavaScript về (khá nặng), parse và chạy JS, gọi API để lấy dữ liệu từ server (chậm), sau đó render dữ liệu
- Đòi hỏi project phải chia làm 2 phần riêng là back-end (REST api) và front-end nên khó code hơn
- Không chạy được nếu JavaScript bị disable, hoặc ở các trình duyệt cũ không nhận JavaScript ES6 (Có thể dùng transpiler và polyfill nhưng sẽ làm tăng kích cỡ file js)
- Nếu client sử dụng mobile, device yếu thì khi load sẽ bị chậm

## **Sự khác nhau giữa SSR và CSR là gì?**


### **Thời gian tải trang lần đầu**

 Ở lần tải đầu tiên ở `CSR`, trình duyệt tải HTML, CSS, và tất cả các script sau đó biên dịch HTML thành nội dung có thể sử dụng trên trình duyệt

 Khoảng thời gian này thường nhiều hơn là việc lấy về một đoạn HTML đã được biên dịch và các script tương ứng. Do đó **`SSR` sẽ tốn ít thời gian hơn cho việc tải trang lần đầu**.

### **Lần thứ hai và các lần tải trang tiếp theo**

Các đoạn script cần thiết đã được load trong `CSR`, thời gian tải là ít hơn với CSR. Nó sẽ không gửi request tới server trừ khi Javascript cần được tải.

Với  `SSR`, một vòng lặp đầy đủ như lần tải đầu được lặp lại. Điều này có nghĩa đã có **sự thay đổi lớn của CSR với SSR từ lần tải trang thứ hai**

### **Ảnh hưởng tới Catching**

- Ở `CSR`, cũng như việc các tải các module là không cần thiết, ứng dụng `CSR` có thể hoạt động mà không cần tới Internet ( trừ khi bạn gửi yêu cần lấy data). Khi đã được load, ứng dụng không cần thiết gửi các yêu cầu tới server lần nào nữa. Điều này làm cho các ứng dụng web khi được chuyển hướng sẽ giống như một ứng dụng desktop.
- Ở `SSR`, yêu cầu tới server luôn được gửi di. Do đó **thời gian tải trang là cao hơn so với CSR**. Việc caching đã cải thiện nội dung render cho SSR cũng như script được lấy ra từ cache.

### **Ảnh hưởng tới SEO**
- Với `CSR`, nội dung trang web được sinh ra tự động nhờ Javascript. Do đó việc thay đổi metadata từ trang này trang web sẽ phải tiến hành bằng Javascript. Trong quá khứ, các máy tìm kiếm thường không thích chạy Javscript trong khi crawlers đang quét trang web. Tuy nhiên Google đang chấp thuận chạy Javascipt, xu hướng đang thay đổi.
- Với `SSR`, trang web hoàn chỉnh đã được biên dịch với đúng các metadata và gửi tới trình duyệt. Điều này đàm bảo metadata của trang web luôn luôn chính xác bất kể crawlers có cho phép Javascript sử dụng hay không. Điều này dẫn tới **SSR là cách tiếp cận tiếp hơn cho SEO so với CSR.**

## **Single page Application (SPA)**

`Single page Application` là một ứng dụng web hay một website mà ở đó tất cả các thao tác của người dùng chỉ diễn ra trên 1 trang duy nhất, tất cả các cấu trúc của trang web (HTML) được load sẵn 1 lần và sẽ không load lại ngay cả khi chuyển trang.

**Ưu điểm**
- SPA có thể thực hiện đẩy đủ các chức năng của một ứng dụng hiển thị phong cách "truyền thống".
- SPA nhanh, tất cả (HTML + CSS + JS) chỉ phải load một lần trong quá trình sử dụng. Chỉ có dữ liệu là được chuyển qua chuyển qua lại.
- Tăng tính tương tác giữa người dùng
- Tìm kiếm, tính toán, xử lý nhanh hơn.

**Nhược điểm**
- Ảnh hưởng tới việc SEO.
- Sử dụng ngôn ngữ Javascript nên vừa là ưu điểm vừa là nhược điểm nếu người lập trình xử lý không khéo. Ta rất dễ rơi vào "callback hell".
- Bên cạnh tối ưu cho sever, ta cần suy nghĩ tới việc tối ưu cho cả client.
- Tải trang lần đầu sẽ nặng.

## **Multi-page Application (MPA)**

`Multi-page Application` là ứng dụng web truyền thống tải lại toàn bộ trang và hiển thị trang mới khi người dùng tương tác với ứng dụng web. Mỗi khi dữ liệu được trao đổi qua lại, một trang mới sẽ được yêu cầu từ máy chủ để hiển thị trong trình duyệt web.

**Ưu điểm**

-  Tối ưu SEO đơn giản: Kiến trúc của MPA cho phép dễ dàng tối ưu hóa mọi trang cho các công cụ tìm kiếm. Nhà phát triển có thể thêm thẻ Meta cho bất kỳ trang nào.
- Dễ phát triển: Thông thường, việc phát triển một ứng dụng nhiều trang yêu cầu một lượng công nghệ nhỏ hơn.

**Nhược điểm**

- Các vấn đề về hiệu suất có thể xảy ra: Trong trường hợp có số lượng yêu cầu lớn và sự cần thiết phải tải lại một số lượng lớn trang, hiệu suất và tốc độ chắc chắn sẽ bị ảnh hưởng. Điều này đặc biệt đúng đối với các dự án có lưu lượng truy cập trang web cao, số lượng trang lớn và nhiều chức năng.
- Tích hợp chặt chẽ Front-end và back-end: Theo quy luật, các thành phần này của ứng dụng web được tích hợp sâu và đó là lý do tại sao có thể mất nhiều thời gian hơn để phát triển và kiểm tra chúng.
- Bảo trì và cập nhật: Khó khăn khi cung cấp hỗ trợ kỹ thuật cho các trang web có rất nhiều trang. Vấn đề này cũng áp dụng cho các vấn đề bảo mật.