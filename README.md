# BEM
- Là tiêu chuẩn đặt tên class khi viết css

# Ý nghĩa
- Viết tắt của chữ: Block Element Modifier
- Block: Khối
- Element: là thành phần trong khối
- Modifier: là phần bổ sung cho "Block" và 'Element' khi có thay đổi

# Tại sao phải dùng BEM?
- Thống nhất chung cách đặt tên khi làm chung 1 team để không bị đặt trùng tên class, css sẽ đè lên nhau

# Ứng dụng
- Xây dựng layout website
- Xây dựng các thành phần trên website

# Ưu điểm
- Rõ ràng, dễ hiểu khi các members khác đọc code của mình
- Tái sử dụng dễ dàng
- Hỗ trợ làm việc vs team dễ dàng hơn
- Khi viết css sẽ ko lo class của css này ảnh hưởng tới class của css khác

# Nhược điểm
- Tên class dài
- Một vài người cho ràng trình sẽ xấu

# Khi nào sử dụng BEM?
- Dự án nhiều members
- Dự án lớn, số lượng page nhiều or số lượng các thành phần trên page nhiều

# Cú pháp
- .block
- .block__element
- .block--modifier
- .block__element--modifier

## Thực hành
- Làm Button
    - Enabled: Pointer, hover effect
    - Disabled: Arrow, no effect
- Làm message
- Làm 1 thành phần trên Website
