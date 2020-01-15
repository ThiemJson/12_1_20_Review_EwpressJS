# Chẳng có gì hay ho lắm, chỉ là tôi đang review lại kiển thức đã học cho khỏi quên tôi, tí nữa tôi chuyển sang Master CSS bây giờ ý mà

# B1
Đầu tiên là làm gì ý nhỉ, thôi ăn lol rồi, quên rồi. Haizzz. tạo một cái file server.js. À quên chưa làm cái NPM INIT
Require cái Express, Pug nữa này
# B2 
Tạo cái .gitignore, đứa cái thằng node_modules vào cho khi commit nó khỏi bị vào, cho đỡ.
# B4 
Chạy thử cái server xem nó chạy như lào lào. 

# B5 
Tôi tạo một cái folder là views này, trong đó tôi lại tạo một cái là folder là Users, trong đó có một file PUG là user.

# B6 APP.GET
Tôi tại một cái app.get ở trong file server.js, cái này nó có 2 tham số, thực sự là có 3 tham số thì phải nhưng mà dùng 2 thôi cũng được, 
Một cái app.get((cái này là một cái Endpoit này, nghĩa là người dùng nhập gì vào ở thanh URL thì cái này nó đónnnn, một cái là REQuest, một cái là RESPONSE))

Cái request nó sẽ chứa những gì mà người nhận gửi lên, còn cái REsponse thì nó là cái mà Server trả về cho người dùng, CLIENT đó. 

# B7
Tôi đang chẳng hiểu tại sao không biết tôi sai ở đâu mà cái server này nó không chạy, clon má.
Clone me, mãi tôi mới render ra được ,chẳng hiểu sao nó lại như vậy, đù má

# B8
Vừa rồi là nó hơi nhập nhằng ở cái path thôi, còn bây giờ tôi quên mất cách để gửi một cái GET lên server , rồi server lấy cái đó render ra theo như ý mình rồi . Hầy 

# B9 
tôi ngồi gõ mãi mà quên gõ cái README, câu chuyện tôi ôn lại là được như thế này, render của thằng respone là nó sẽ trả ra một cái file PUG, hiểu một cách đơn giản là nó kiểu kiểu đơn giản là RENDER ra cái file HTMl. 

Còn cái action và get post ở cái PATH của nó là nó đưa về một cái Endpoit nào đó thì phải, rồi mình sẽ xử lý cái endpoit đó với cái method phù hợp, method get chẳng hạn, hoặc method post chẳng hạn 

# B10 
Chung quy lại, cũng căng phết dấdyyyy

# B11
Tôi đang thử với cái thằng LowDB

# B12 
Mình học được cách sử dụng cái lowdb, mình thấy cũng được, đọc file ghi file cũng khác là hay , cơ mà đây là thao tác với database, mình vẫn chưa hiểu rõ lắm những cái khác nó có ý nghĩa như thế nào, thôi thì mình chuyển sang master CSS học cái đó vậy :D 

# B12
Cảm giác của tôi sau khi học xong thằng Route, nó khá là hay, nó định tuyển cho cái Endpoit , khỏi cần phải nhập một đống thứ nhầy nhụa trong server.js, chỉ cần chia nó ra thành từng cái Route và nhét nó vào một cái Folder tên là Route thôi là được :D . 

# b13 
Sau một hồi tôi thêm cái Controller, hiểu một cách đơn giản là nó giúp t đưa toàn bộ code chạy ở routes sang một file khác, có lẽ là để dễ quản lý hơn, giờ tôi sẽ code lại toàn bộ cái trang này xem tôi học nhớ được đến đâu. :D 

# B14
t vừa học cái Validator , nó cũng khoai khoai lắm, cũng khá là bình thường, nhưng mà mình chưa học cái Bootsrap nên là làm quen nó cũng hơi khó khó :V 

Cái vali này cũng không khoai , cơ mà hôm nay mình bị nhầm một chút giữa cái request.body và request.query, hầy :D 

# B15
Mihf vừa biết thêm một cái gọi là Middleware, hóa ra là mình dung nó cũng nhiều rồi nhưng mà mình không biết, nó dùng cũng được 
Nghĩa là nếu dùng 2 cái middle cùng một lúc, thì phải có một cái xong rồi thì mới đến lượt cái kia nào, nó làm mình cảm thấy giống giống callback nhỉ 


# B16
Cái middleware đó nó không hẳn giống callback, nó kiểu như là một cái tác vụ ở giữa, qua thằng này mới đến thằng kia 
Vừa rồi thì tôi cũng tự tạo được một cái trang Login căn bản , không hẳn là lưu pass là dung cookie đâu, cookie đó là một cái gì đó , mà serve sẽ trả về cho người dùng, và khi người dung gửi Req lên server đó thì sẽ gửi kèm cả cookie luôn, và theo như mình biết thì cách này không dùng, chit đề demo cách sử dụng của Cookie thôi, :D . 
Trong bản Demo này thì Server sẽ kiểm tra trong Request có cái Cooikie này không, cái cookie này mang ID của người dùng, 
Và mình hoàn toàn có thể tạo một cái nút gọi là Logout chẳng hạn, xóa Cookie đó đi :D .

# B17 
sorry, tôi quên béng mất là cần viết README, à vừa rồi tôi làm được một cái đăng nhập rồi này. Và tôi vừa làm cái mã Md5 này.
Ơ tôi tưởng là tôi chưa gõ cái md5 vào đây hả. 

# b18 Md5
Tôi dùng cái Md5 cho mật khẩu của mình, và rồi thì tôi đang đọc đến phần làm một cái hiện ra ai là người vừa đăng nhập vào, nó kieur như alf hiện tên ý. 
Nhưng mà có một bài toán xảy ra là ,nếu tôi thay đổi cookie bởi một ID của người dùng khác thì tôi hoàn toàn có thể Login vào tài khoản khác mà không cần pass cũng chẳng cần email :D :D :D  


# B19 
Và thế là có một cái gọi là Signed Cookie ra đời, và tôi đang đọc nó  :D 
Tôi thấy nó khá là hay, nhưng mà mình cần dùng cái SignedCookie cho nó :D . :v 
Nó giúp mình bảo vệ Cookie, không thay đổi coole được :D 
Đơn giản, chỉ cần trong chỗ set Cookie, mình cho cái tham số thứ 3,  Signed là true là xong :V . nó tự động ấy cho mình :v 
