import React, { useState } from 'react';
import { Search, X, ArrowRight, Layers, Briefcase, ListTodo, ShieldCheck } from 'lucide-react';
import { quanDiemData, nguyenTacData, nhiemVuData, thucHienData } from '../data/policyData';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface SearchResult {
  sectionTitle: string;
  targetId: string;
  title: string;
  snippet: string;
  iconType: 'views' | 'principles' | 'tasks' | 'execution';
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const results: SearchResult[] = React.useMemo(() => {
    const q = searchTerm.trim().toLowerCase();
    if (!q) return [];

    const list: SearchResult[] = [];

    // Search Quan điểm
    quanDiemData.forEach((v) => {
      const allText = v.paragraphs.join(' ').toLowerCase();
      if (allText.includes(q)) {
        list.push({
          sectionTitle: 'Quan điểm',
          targetId: 'quan-diem',
          title: `Quan điểm ${v.number}`,
          snippet: v.paragraphs[0],
          iconType: 'views',
        });
      }
    });

    // Search Nguyên tắc
    nguyenTacData.forEach((g) => {
      const allText = `${g.title} ${g.paragraphs.join(' ')} ${g.factors?.join(' ') || ''} ${g.regions?.join(' ') || ''}`.toLowerCase();
      if (allText.includes(q)) {
        list.push({
          sectionTitle: 'Nguyên tắc',
          targetId: 'nguyen-tac',
          title: g.title,
          snippet: g.paragraphs[0],
          iconType: 'principles',
        });
      }
    });

    // Search 5 nhiệm vụ trọng tâm
    nhiemVuData.forEach((t) => {
      if (t.content.toLowerCase().includes(q)) {
        list.push({
          sectionTitle: '5 nhiệm vụ trọng tâm',
          targetId: 'nhiem-vu',
          title: `Nhiệm vụ 0${t.number}`,
          snippet: t.content,
          iconType: 'tasks',
        });
      }
    });

    // Search Thực hiện
    thucHienData.forEach((item) => {
      if (item.content.toLowerCase().includes(q)) {
        list.push({
          sectionTitle: 'Thực hiện',
          targetId: 'thuc-hien',
          title: item.subject,
          snippet: item.content,
          iconType: 'execution',
        });
      }
    });

    return list;
  }, [searchTerm]);

  if (!isOpen) return null;

  const handleSelectResult = (targetId: string) => {
    onClose();
    setTimeout(() => {
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const getIcon = (type: SearchResult['iconType']) => {
    switch (type) {
      case 'views':
        return <Layers className="w-4 h-4 text-red-600" />;
      case 'principles':
        return <Briefcase className="w-4 h-4 text-amber-600" />;
      case 'tasks':
        return <ListTodo className="w-4 h-4 text-blue-600" />;
      case 'execution':
        return <ShieldCheck className="w-4 h-4 text-emerald-600" />;
    }
  };

  const sampleKeywords = [
    'vị trí việc làm',
    'biên chế',
    'cấp xã',
    'tiền lương',
    'Bộ Chính trị',
    'cơ sở dữ liệu',
    'phân cấp, phân quyền',
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4 bg-slate-900/60 backdrop-blur-xs no-print">
      <div className="bg-white rounded-3xl w-full max-w-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[80vh]">
        {/* Search Input Bar */}
        <div className="p-4 border-b border-slate-200 flex items-center gap-3">
          <Search className="w-5 h-5 text-slate-400 shrink-0" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Tìm kiếm chính xác trong văn bản..."
            className="w-full bg-transparent text-sm sm:text-base text-slate-900 focus:outline-hidden placeholder:text-slate-400"
            autoFocus
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="p-1 text-slate-400 hover:text-slate-600"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-600 text-xs font-semibold"
          >
            Đóng
          </button>
        </div>

        {/* Suggestion Keywords */}
        <div className="px-4 py-2.5 bg-slate-50 border-b border-slate-100 flex items-center gap-2 overflow-x-auto text-xs">
          <span className="text-slate-400 shrink-0">Gợi ý:</span>
          {sampleKeywords.map((kw) => (
            <button
              key={kw}
              onClick={() => setSearchTerm(kw)}
              className="px-2 py-0.5 rounded-md bg-white border border-slate-200 hover:border-red-400 hover:text-red-700 text-slate-600 shrink-0 transition-colors"
            >
              {kw}
            </button>
          ))}
        </div>

        {/* Results List */}
        <div className="overflow-y-auto p-4 space-y-2 flex-1">
          {searchTerm && results.length === 0 && (
            <div className="text-center py-10 text-slate-400 text-sm">
              Không tìm thấy đoạn văn nào chứa từ khóa "{searchTerm}".
            </div>
          )}

          {!searchTerm && (
            <div className="text-center py-10 text-slate-400 text-sm">
              Nhập từ khóa để tra cứu trực tiếp trong toàn văn văn bản.
            </div>
          )}

          {results.map((res, idx) => (
            <div
              key={idx}
              onClick={() => handleSelectResult(res.targetId)}
              className="p-3.5 rounded-xl border border-slate-100 hover:border-red-200 hover:bg-red-50/30 transition-all cursor-pointer flex items-start justify-between gap-3 group"
            >
              <div className="flex items-start gap-3">
                <div className="mt-0.5 p-1.5 rounded-lg bg-slate-100 group-hover:bg-white transition-colors">
                  {getIcon(res.iconType)}
                </div>
                <div>
                  <div className="text-[11px] font-bold text-red-700 uppercase tracking-wide">
                    {res.sectionTitle}
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-red-800 transition-colors">
                    {res.title}
                  </h4>
                  <p className="text-xs text-slate-600 line-clamp-2 mt-0.5 leading-relaxed">
                    {res.snippet}
                  </p>
                </div>
              </div>

              <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-red-700 group-hover:translate-x-1 transition-all shrink-0 mt-2" />
            </div>
          ))}
        </div>

        <div className="p-3 bg-slate-50 border-t border-slate-100 text-xs text-slate-400 flex items-center justify-between">
          <span>{results.length} đoạn văn bản phù hợp</span>
          <span>Bấm để di chuyển tới vị trí văn bản</span>
        </div>
      </div>
    </div>
  );
};
