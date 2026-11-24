// 내 정보는 이 파일에서 수정하세요. 내용은 McK/Portfolio_JinwooJang_EN_Revised.pdf 기준으로 채웠습니다.
// HTML 태그 대신 일반 텍스트를 입력하세요. 비워 둔 링크는 표시하지 않습니다.
window.PROFILE = {
  name: 'Jinwoo Jang',
  localName: '장진우',
  description: 'M.S. student at Seoul National University (DSBA Lab), working on AI for real-world industrial applications.',
  role: 'M.S. Student',
  department: 'Industrial Engineering',
  affiliation: 'Seoul National University',
  lab: 'Data Science & Business Analytics (DSBA) Lab.',
  labUrl: 'https://dsba.snu.ac.kr/',
  location: 'Seoul, Republic of Korea',
  photo: 'assets/profile/photo.jpg', // 프로필 사진(정사각형)
  photoDark: '', // 다크 모드용 사진을 따로 쓰려면 경로를 넣으세요(비우면 photo를 그대로 씁니다)
  photoCaption: '', // 비워 두면 숨깁니다.
  email: 'jinwoo_jang@snu.ac.kr',
  github: 'https://github.com/jinwwo',
  linkedin: 'https://www.linkedin.com/in/jang-jinwoo/',
  scholar: '',
  cv: '', // 예: 'assets/CV.pdf'
  // 본문·저자 목록에서 이 이름이 나오면 자동으로 링크가 걸립니다.
  // 본문에서 이 문구는 파란색으로 강조됩니다.
  highlights: ['AI for real-world industrial applications'],
  inlineLinks: {
    'Pilsung Kang': 'https://scholar.google.com/citations?user=I2pcWZIAAAAJ&hl=en',
  },
  greeting: "Hi, I'm Jinwoo Jang.",
  bio: [
    "I'm an M.S. student at Seoul National University, advised by Prof. Pilsung Kang.\nMy research focuses on AI for real-world industrial applications. I'm broadly interested in industrial anomaly detection, automated visual inspection, and vision–language models. More recently, I have been extending my research to vision–language–action (VLA) models.",
    'Through industry–academia collaborations with Samsung Electronics DS and Hyundai Motor Company, I focus on building methods robust to real-world constraints such as severe class imbalance, data scarcity, incomplete measurements, and strict real-time requirements.',
  ],
  interests: [], // 비우면 About의 키워드 칩이 숨겨집니다.
  tagline: '',
  // 배열을 []로 비우면 해당 섹션과 메뉴가 함께 숨겨집니다.
  education: [
    {
      title: 'Seoul National University',
      subtitle: 'M.S. in Industrial Engineering',
      description: 'Data Science & Business Analytics (DSBA) Lab. (Advisor: Prof. Pilsung Kang)',
      period: 'Sep 2025 — Aug 2027 (exp.)',
      logo: 'assets/logos/snu.svg',
    },
    {
      title: 'Kookmin University',
      subtitle: 'B.S. in Electronic & Information System Engineering',
      period: 'Mar 2019 — Feb 2025',
      logo: 'assets/logos/kookmin.svg',
      logoFill: true, // 여백 없이 크게 표시
    },
  ],
  // 저자 이름 뒤의 † (공동 제1저자), * (교신저자)는 위첨자로 표시됩니다.
  // tldr: 'TL;DR' 토글 안에 표시되는 직접 쓴 요약입니다(원문 Abstract는 공개하지 않습니다).
  publications: [
    {
      title: 'Does Stronger CLIP Generalization Transfer to Zero-Shot Anomaly Detection?',
      image: 'assets/papers/trendad.png', // 논문 대표 그림(썸네일, 클릭하면 확대)
      imageAlt: 'Figure 1 – Generalization–AD Trend across CLIP backbones',
      authors: 'Jinwoo Jang†, Jaehyuk Heo†, Pilsung Kang*',
      venue: 'Under review',
      year: '2026',
      // 예: { label: 'Paper', url: 'https://...', type: 'paper' }
      // 예: { label: 'Code', url: 'https://github.com/...', type: 'code' }
      tldr: "CLIP backbones with stronger generalization do not always perform better in zero-shot anomaly detection, making backbone selection difficult in real-world environments without target anomaly labels. We propose TrendAD, which combines global and spatial CLIP features and learns lightweight text decision axes to improve both anomaly detection and the alignment between generalization and AD performance. This makes public benchmark performance a more reliable criterion for selecting backbones in such label-free environments.",
      links: [],
    },
    {
      title: 'GuidelineAD: Explicit Normality Specification for Industrial Anomaly Detection with Frozen VLMs',
      image: 'assets/papers/guidelinead.png', // 논문 대표 그림(썸네일, 클릭하면 확대)
      imageAlt: 'Figure 2 – Overview of GuidelineAD',
      authors: 'Jaehyuk Heo, Jinwoo Jang, Pilsung Kang*',
      venue: 'Under review',
      year: '2026',
      tldr: "Normal reference images show what acceptable products look like but often leave inspection criteria implicit. We propose GuidelineAD, which infers and ranks category-specific inspection guidelines from normal images, then uses them to score and explain anomalies with a frozen vision-language model. This enables accurate, traceable inspection without anomaly data, manually specified criteria, or target-domain model updates.",
      links: [],
    },
    {
      title: 'Gated Dual-Route Imputation of Missing Wafer Metrology in Semiconductor Manufacturing',
      image: 'assets/papers/gdri.png', // 논문 대표 그림(썸네일, 클릭하면 확대)
      imageAlt: 'Overview of GDRI',
      authors: 'Jungi Lee†, Jinwoo Jang†, Subeen Cha, Junghun Jang, Hungkuk Ko, Hyeonjeong Lee, Pilsung Kang*',
      venue: 'Under review',
      year: '2026',
      tldr: "Selective metrology creates structured gaps in semiconductor data, and conventional methods often overlook dependencies across both process steps and wafers within a lot. We propose GDRI, which models these two sources separately and adaptively combines their estimates to impute missing values. Its results on industrial and synthetic data show the value of manufacturing-specific dependencies for handling diverse missingness patterns.",
      links: [],
    },
    {
      title: 'Integrated Anomaly Detection and Scoring Model for Equipment and Process Quality Monitoring',
      image: 'assets/papers/integrated.png', // 논문 대표 그림(썸네일, 클릭하면 확대)
      imageAlt: 'Figure 2 – Overview of the proposed anomaly detection framework',
      authors: 'Suyeon Shin†, Jaehyuk Heo†, Hyeongwon Kang, Jinwoo Jang, Seunghwan Bang, Pilsung Kang*',
      venue: 'Under review',
      year: '2025',
      tldr: "Conventional SPC can miss subtle early warning signals in raw sensor data, while supervised deep learning is difficult to apply under severe class imbalance. We propose an unsupervised time-series framework that uses maintenance history to curate normal data and tracks anomaly-score trends to detect equipment degradation. Validated on real manufacturing data, it offers a practical route to earlier warnings and holistic process monitoring, including changes that summary statistics may miss.",
      links: [],
    },
  ],
  // 내용은 McK/Portfolio_JinwooJang_QuantumBlack.pdf 3페이지 기준입니다.
  experience: [
    {
      title: 'NoriSpace',
      subtitle: 'AI Research Intern',
      description: 'Python-based vision AI for document forgery detection. Contributed to NoriS FDS, a document forgery and tampering detection system for insurance applications, adopted by major insurance companies in Korea.',
      period: 'Jun 2024 — Dec 2024',
      logo: 'assets/logos/norispace.svg',
      // stack: 기술 스택처럼 칩으로 표시됩니다. note: 칩 아래 한 줄 메모입니다.
      stack: ['Document forgery detection', 'Image anomaly detection', 'Vision AI'],
    },
    {
      title: 'KATUSA',
      subtitle: 'Sergeant · Human Resources Specialist (MOS 42A)',
      description: 'Served as a Korean Augmentation to the United States Army (KATUSA) soldier, handling human resources administration for a U.S. Army unit. Honorably discharged.',
      period: 'May 2020 — Nov 2021',
      logo: 'assets/logos/2id.png',
      stack: ['Human resources administration', 'Korean–English interpretation'],
    },
  ],
  // 최신 프로젝트가 위로 오도록 시작일 기준 내림차순으로 정렬했습니다.
  // logo: 회사 로고, image: 프로젝트 그림(클릭하면 크게 보기), details: '자세히 보기' 안의 Problem / My Role / Results.
  projects: [
    {
      company: 'Samsung Electronics DS',
      logo: 'assets/logos/samsung.svg',
      title: 'Explainable AI for Semiconductor Process Anomaly Detection and Root-Cause Variable Identification',
      description: 'Developing an XAI framework that interprets multivariate time-series anomaly detection results and uses variable-level attribution to identify and rank potential contributing process variables.',
      period: 'Oct 2026 — Sep 2027',
      status: 'Ongoing',
      image: 'assets/projects/xai.svg',
      imageAlt: 'Four steps: detect an anomalous event in multivariate sensor data, attribute it to process variables, rank and validate candidate causes (RF power ablation reduces the event peak by 26.3%), and turn the result into on-site response guidelines.',
      details: {
        problem: [
          'Existing anomaly detection models can flag anomalies but give limited insight into which process variables may have contributed to them.',
          'With hundreds of interacting variables, a quantitative framework is needed to identify potential causes quickly and consistently.',
          'Existing XAI methods are built mainly for classification and are hard to apply directly to anomaly detection outputs.',
        ],
        role: [
          'Designing an XAI-based process for interpreting anomaly detection results.',
          'Developing a method to identify potential contributing variables through variable-level attribution analysis.',
          'Validating the importance of identified variables and refining the analysis methodology.',
        ],
      },
      tags: ['Explainable AI', 'Root-Cause Analysis', 'Anomaly Detection'],
      links: [], // 예: { label: 'GitHub', url: 'https://github.com/...', type: 'code' }
    },
    {
      company: 'Hyundai Motor Company',
      logo: 'assets/logos/hyundai.svg',
      title: 'AI Model for Predicting Ride Comfort on Overseas Roads Using Ride Comfort Test Rig Data',
      description: 'Developing an AI framework that uses road profiles and vehicle vibration data from a ride comfort test rig to predict vibration response and ride comfort on untested roads, including overseas roads.',
      period: 'Jul 2026 — Feb 2027',
      status: 'Ongoing',
      image: 'assets/projects/ride-comfort.svg',
      imageAlt: 'Three steps: a test rig replays a known road profile and measures vehicle response; a vehicle-specific model learns the mapping; the model predicts vehicle response on an untested overseas road.',
      details: {
        problem: [
          'Conventional ride comfort evaluation relies on on-road testing and transporting test vehicles, which costs substantial time and money.',
          'Limited test rig availability makes it hard to evaluate every vehicle–road combination directly.',
          'An AI-based system is needed to predict vehicle response on roads where response measurements are unavailable.',
        ],
        role: [
          'Preprocessing ride comfort test rig time-series data and building the training dataset.',
          'Training models that predict vehicle vibration response from road profiles, and optimizing hyperparameters.',
          'Comparing time- and frequency-domain prediction performance and validating generalization to new roads.',
        ],
      },
      tags: ['Ride-Comfort Prediction', 'Time-Series Modeling', 'Vehicle Dynamics'],
      links: [],
    },
    {
      company: 'Samsung Electronics DS',
      logo: 'assets/logos/samsung.svg',
      title: 'AI Framework for Missing Metrology Imputation and Anomaly Detection in Semiconductor Manufacturing',
      description: 'Filled the quality-data gap left by selective metrology: AI-based imputation predicts the quality of unmeasured wafers, enabling wafer-level anomaly detection without extra physical measurement.',
      period: 'Oct 2025 — Sep 2026',
      image: 'assets/projects/imputation.svg',
      imageAlt: 'Three steps: selective metrology leaves most wafer measurements missing; an AI imputation model predicts the unmeasured values; anomaly detection then runs on every wafer and flags an unmeasured one.',
      details: {
        problem: [
          'Every step of advanced semiconductor processes requires quality inspection, but measuring every wafer is prohibitively expensive.',
          'Only one wafer per lot is sampled, so metrology values for the remaining wafers are extremely sparse.',
          'This limits early detection of subtle anomalies on individual wafers.',
        ],
        role: [
          'Designed missing-data scenarios (process-step, wafer-level, and mixed) and built a synthetic benchmark dataset.',
          'Developed an AI-based imputation algorithm that predicts quality values of unmeasured wafers.',
          'Integrated a real-time anomaly detection model on the imputed data and validated its performance.',
        ],
        results: [
          'Outperformed baseline methods in imputation accuracy even with up to 60% of wafer metrology missing.',
          'End-to-end imputation + detection in ≤27.62 ms, well within the 60-second minimum metrology cycle.',
        ],
      },
      tags: ['Data Imputation', 'Wafer Metrology', 'Anomaly Detection'],
      links: [],
    },
    {
      company: 'Samsung Electronics DS',
      logo: 'assets/logos/samsung.svg',
      title: 'Agile Anomaly Detection and Visualization for Equipment and Process Quality Monitoring',
      description: 'Built an unsupervised anomaly detection and scoring framework on raw wafer trace data that catches subtle early signs of anomalies despite severe data imbalance in high-volume production.',
      period: 'Mar 2025 — Feb 2026',
      image: 'assets/projects/agile-ad.svg',
      imageAlt: 'Three steps: build a normal-operation dataset from post-maintenance raw sensor traces, train an unsupervised anomaly detector on normal data only, and track anomaly-score trends on a real-time dashboard for predictive maintenance.',
      details: {
        problem: [
          'As devices scale down and processes grow more complex, real-time equipment diagnostics become increasingly important.',
          'Conventional SPC (Statistical Process Control) loses raw-data information when computing summary statistics.',
          'Extreme data imbalance and high labeling costs in mass production make supervised deep learning hard to apply.',
        ],
        role: [
          'Designed a process for constructing a reliable normal-operation dataset from post-maintenance data using PM/BM records.',
          'Designed a time-series anomaly detection input structure that uses raw sensor traces instead of summary statistics.',
          'Built a dashboard tracking anomaly-score trends in real time to support monitoring and predictive maintenance (PdM).',
        ],
        results: [
          'Achieved performance comparable to large-dataset training using data from only 10 wafers.',
          'Inference in ~0.003 s for a 100,000-time-step sequence.',
        ],
      },
      tags: ['Time-Series Anomaly Detection', 'Quality Visualization', 'Predictive Maintenance'],
      links: [],
    },
  ],
  // location: 장소 칩, links: 아이콘 링크 칩(type: 'youtube' | 'article'). url이 비어 있으면 칩이 숨겨집니다.
  activities: [
    {
      logo: 'assets/logos/youtube.svg',
      title: 'DSBA Lab YouTube · Paper Review Talks',
      description: 'Our lab regularly shares paper-review talks on its YouTube channel.',
      links: [{ label: 'DSBA YouTube', url: 'https://www.youtube.com/@dsba2979', type: 'youtube' }],
    },
    {
      logo: 'assets/logos/ifa.svg',
      title: 'IFA 2024 · Corporate Booth Operations',
      description: 'Ran a corporate exhibition booth, handling on-site interpretation, booth operations, and business meetings.',
      period: 'Sep 2024',
      location: 'Berlin, Germany',
      links: [],
    },
    {
      logo: 'assets/logos/ces.svg',
      title: 'CES 2024 · Seoul Pavilion University Student Supporters',
      description: 'Supported Seoul Pavilion exhibitors with on-site interpretation, booth operations, and business meetings.',
      period: 'Jan 2024',
      location: 'Las Vegas, USA',
      links: [{ label: 'Article', url: '', type: 'article' }], // 기사 URL을 넣으면 'Article' 칩이 나타납니다.
    },
    {
      logo: 'assets/logos/programmers.png',
      logoFill: true,
      title: 'Programmers Silicon Valley Bootcamp',
      period: 'Jul 2023 — Sep 2023',
      description: 'Took part in AI study sessions, coding education, and an AI competition.',
      location: 'San Francisco, USA',
      links: [],
    },
  ],
};
