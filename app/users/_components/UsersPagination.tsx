import { Button } from "@/components/ui/button";

interface UsersPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const UsersPagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: UsersPaginationProps) => {
  // Create an array of page numbers [1, 2, ..., totalPages]
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex justify-center items-center gap-2 mt-8">
      {/* Previous Button */}
      <Button
        variant="outline"
        size="sm"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        Previous
      </Button>

      {/* Page Numbers */}
      {pages.map((page) => (
        <Button
          key={page}
          variant={page === currentPage ? "default" : "outline"}
          size="sm"
          onClick={() => onPageChange(page)}
          className="min-w-[36px]"
        >
          {page}
        </Button>
      ))}

      {/* Next Button */}
      <Button
        variant="outline"
        size="sm"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        Next
      </Button>
    </div>
  );
};
