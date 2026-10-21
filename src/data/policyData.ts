export interface ViewItem {
  number: number;
  paragraphs: string[];
}

export const quanDiemData: ViewItem[] = [
  {
    number: 1,
    paragraphs: [
      'Vị trí việc làm là nền tảng của quản trị tổ chức, quản trị nhân lực; là căn cứ để tuyển dụng, bố trí, sử dụng, đào tạo, đánh giá, sàng lọc và cải cách chính sách tiền lương.',
      'Hoàn thiện hệ thống vị trí việc làm phải xuất phát từ chức năng, nhiệm vụ, sản phẩm đầu ra; chuyển mạnh từ quản lý theo số lượng người, biên chế, ngạch bậc sang quản trị theo vị trí việc làm và kết quả thực thi.'
    ]
  },
  {
    number: 2,
    paragraphs: [
      'Hoàn thiện hệ thống vị trí việc làm gắn với thực hiện Nghị quyết Đại hội XIV của Đảng, Kết luận số 76-KL/TW, yêu cầu vận hành mô hình chính quyền địa phương 2 cấp.',
      'Phân cấp, phân quyền phải gắn với phân định rõ nhiệm vụ và bảo đảm điều kiện thực hiện.'
    ]
  },
  {
    number: 3,
    paragraphs: [
      'Rà soát để đề xuất điều chỉnh hoặc loại bỏ vị trí không còn phù hợp, bổ sung vị trí mới khi thực sự phát sinh nhiệm vụ.',
      'Thống nhất phương pháp, tiêu chí và dữ liệu trong toàn hệ thống chính trị; vận dụng phù hợp với tính chất công việc, đặc thù lĩnh vực và địa bàn.'
    ]
  },
  {
    number: 4,
    paragraphs: [
      'Đổi mới quản lý cán bộ theo vị trí việc làm. Tinh giản biên chế gắn với cơ cấu lại, nâng cao chất lượng đội ngũ. Không áp dụng máy móc tỷ lệ tinh giản bình quân.',
      'Lấy yêu cầu vị trí việc làm và kết quả thực hiện nhiệm vụ làm căn cứ bố trí, đánh giá, đãi ngộ cán bộ. Khắc phục bình quân, cào bằng, coi trọng ngạch, bậc, thâm niên hơn hiệu quả công việc; hoàn thiện cải cách chính sách tiền lương từng bước nâng cao đời sống và đãi ngộ tương xứng.'
    ]
  },
  {
    number: 5,
    paragraphs: [
      'Quản lý vị trí việc làm, nhu cầu nhân lực và biên chế trên cơ sở dữ liệu đầy đủ, chính xác, thống nhất, liên thông.',
      'Đề cao trách nhiệm trực tiếp của cấp ủy, tổ chức đảng, người đứng đầu đối với chất lượng dữ liệu và kết quả thực hiện.'
    ]
  }
];

export interface PrincipleGroup {
  id: string;
  title: string;
  paragraphs: string[];
  factors?: string[];
  regions?: string[];
}

export const nguyenTacData: PrincipleGroup[] = [
  {
    id: 'nguyen-tac-1',
    title: 'Xác định vị trí việc làm',
    paragraphs: [
      'Xác định vị trí việc làm trên cơ sở nhiệm vụ, thẩm quyền; gắn với nội dung công việc, sản phẩm, trách nhiệm, đồng thời tính đến tác động của phân cấp, phân quyền, ứng dụng công nghệ...',
      'Mỗi vị trí gắn với nhóm công việc tương đối ổn định, có sản phẩm và trách nhiệm rõ ràng; không hình thành vị trí riêng do công đoạn, nhiệm vụ đột xuất; tích hợp các vị trí có tính chất tương đồng và sử dụng chung nhân lực khi phù hợp.',
      'Phân định rõ nhiệm vụ chủ trì, phối hợp; khắc phục triệt để tình trạng chồng chéo, bỏ sót. Rà soát, điều chỉnh khi chức năng, nhiệm vụ thay đổi; kế thừa nội dung còn phù hợp.'
    ]
  },
  {
    id: 'nguyen-tac-2',
    title: 'Xác định nhu cầu nhân lực và quản lý biên chế',
    paragraphs: [
      'Việc xác định nhu cầu nhân lực và quản lý biên chế cần áp dụng phương pháp phù hợp tính chất công việc. Với công việc tham mưu, nghiên cứu, phải tính đến yếu tố đặc thù. Không đồng nhất vị trí việc làm với một cá nhân hay chỉ tiêu biên chế.',
      'Xem xét đồng bộ 4 nhóm yếu tố (địa giới; quy mô phát triển; mức độ phân cấp; chuyển đổi số, tự chủ) và đặc điểm 4 nhóm địa bàn (đô thị đặc biệt, đô thị, đồng bằng, miền núi).',
      'Ưu tiên bố trí lại, điều chuyển, kiêm nhiệm, sử dụng chung nhân lực; ưu tiên thu hồi, điều chuyển biên chế từ nơi giảm nhiệm vụ sang nơi thực sự cần thiết.'
    ],
    factors: [
      'Địa giới',
      'Quy mô phát triển',
      'Mức độ phân cấp',
      'Chuyển đổi số, tự chủ'
    ],
    regions: [
      'Đô thị đặc biệt',
      'Đô thị',
      'Đồng bằng',
      'Miền núi'
    ]
  }
];

export interface TaskItem {
  number: number;
  content: string;
}

export const nhiemVuData: TaskItem[] = [
  {
    number: 1,
    content: 'Khẩn trương rà soát, cập nhật vị trí việc làm theo mô hình tổ chức mới, xác định rõ công việc, sản phẩm đầu ra, nhất là cấp xã.'
  },
  {
    number: 2,
    content: 'Xác định nhu cầu nhân lực phù hợp đặc thù từng khối, địa bàn.'
  },
  {
    number: 3,
    content: 'Hoàn thành cơ sở dữ liệu vị trí việc làm thống nhất trong năm 2026; phục vụ trực tiếp công tác cán bộ và phương án giao biên chế giai đoạn 2027 – 2031'
  },
  {
    number: 4,
    content: 'Xây dựng phương án giao biên chế giai đoạn 2027 - 2031; ưu tiên sắp xếp, điều chuyển, đào tạo nhân lực hiện có.'
  },
  {
    number: 5,
    content: 'Gắn vị trí việc làm với tuyển dụng, bố trí, đánh giá cán bộ dựa trên sản phẩm, hiệu quả. Từ năm 2027, tiếp tục chuẩn hóa danh mục, khung năng lực và công cụ cập nhật dữ liệu.'
  }
];

export interface ExecutionItem {
  id: number;
  subject: string;
  content: string;
}

export const thucHienData: ExecutionItem[] = [
  {
    id: 1,
    subject: 'Ban Tổ chức Trung ương',
    content: 'Ban Tổ chức Trung ương chủ trì hướng dẫn, tham mưu hoàn thành cơ sở dữ liệu vị trí việc làm và phương án giao biên chế giai đoạn 2027 - 2031, báo cáo Bộ Chính trị trong quý 4-2026.'
  },
  {
    id: 2,
    subject: 'Đảng ủy Chính phủ & Bộ Nội vụ',
    content: 'Đảng ủy Chính phủ chỉ đạo Bộ Nội vụ hoàn thiện các quy định, định mức xác định nhu cầu nhân lực đồng bộ với chính sách tiền lương.'
  },
  {
    id: 3,
    subject: 'Các cấp ủy, tổ chức đảng và người đứng đầu',
    content: 'Các cấp ủy, tổ chức đảng và người đứng đầu chịu trách nhiệm trực tiếp về chất lượng dữ liệu, kết quả thực hiện; bố trí đúng người, đúng việc.'
  },
  {
    id: 4,
    subject: 'Cơ quan quản lý ngành & Cơ quan sử dụng nhân lực',
    content: 'Cơ quan quản lý ngành hoàn thiện văn bản, định mức. Cơ quan sử dụng nhân lực và người đứng đầu chịu trách nhiệm kiểm chứng, bảo đảm tính chính xác của dữ liệu.'
  },
  {
    id: 5,
    subject: 'Các đơn vị, địa phương',
    content: 'Các đơn vị, địa phương hoàn thành phương án giao biên chế giai đoạn 2027 - 2031 và cơ sở dữ liệu thống nhất trong quý 4-2026.'
  },
  {
    id: 6,
    subject: 'Ban Tổ chức Trung ương (Báo cáo định kỳ)',
    content: 'Ban Tổ chức Trung ương hàng tháng (bắt đầu từ tháng 11-2026) tổng hợp tiến độ, vướng mắc báo cáo Bộ Chính trị.'
  }
];
